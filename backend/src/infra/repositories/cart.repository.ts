import { CartEntity } from "@infra/entities/cart.entity";
import { ProductEntity } from "@infra/entities/product.entity";
import { PrismaORM } from "src/infra/prisma.config";

interface Products {
    products: number[];
}

const find = async (filter: unknown): Promise<CartEntity[]> => {
    const carts = await PrismaORM.cart.findMany({
        where: filter,
        orderBy: { id: "desc" },
    });
    return carts;
};

const findOne = async (filter: unknown): Promise<CartEntity> => {
    const cart = await PrismaORM.cart.findUnique({
        where: filter,
    });
    return cart;
};

const create = async (
    data: Omit<CartEntity, "id"> & Products,
): Promise<CartEntity & { products: ProductEntity[] }> => {
    const productIds = data.products.map(id => ({ id }));

    const { products, ...cart } = data;

    const insertedCart = await PrismaORM.cart.create({
        data: {
            ...cart,
            products: { connect: productIds },
        },
        include: { products: true },
    });

    return insertedCart;
};

export const CartRepository = {
    find,
    findOne,
    create,
};
