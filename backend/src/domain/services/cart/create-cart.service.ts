import { NotEnoughStorageError } from "@app/errors/enough-storage.error";
import { CartEntity } from "@infra/entities/cart.entity";
import { CartRepository } from "@infra/repositories/cart.repository";
import { ProductRepository } from "@infra/repositories/product.repository";

interface UpsertCart {
    client_name: string;
    deliver_date: number;
    products: { id: number; quantity: number }[];
}

interface NewCart {
    deliver_date: Date;
    status: "PENDING" | "COMPLETED";
    client_name: string;
    value: number;
    products: number[];
}

export const createCartService = async (
    data: UpsertCart,
): Promise<CartEntity> => {
    const productIds = data.products.map(({ id }) => id);
    const products = await ProductRepository.find({
        id: { in: productIds },
    });

    products.forEach(({ id, qty_stock }) => {
        const orderQuantity = data.products.find(
            prdocut => prdocut.id === id,
        ).quantity;

        if (qty_stock < orderQuantity) {
            throw NotEnoughStorageError;
        }
    });

    const productsValue = products.map(
        product =>
            product.price *
            data.products.find(({ id }) => id === product.id).quantity,
    );
    const newValue = productsValue.reduce((a, b) => a + b);

    const newData: NewCart = {
        ...data,
        products: productIds,
        deliver_date: new Date(data.deliver_date),

        value: newValue,
        status: "PENDING",
    };

    data.products.forEach(
        async ({ id, quantity }) =>
            await ProductRepository.update(
                { id },
                { qty_stock: { decrement: quantity } },
            ),
    );

    const cart = await CartRepository.create(newData);
    return cart;
};
