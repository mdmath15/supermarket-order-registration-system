import { CartEntity } from "@infra/entities/cart.entity";
import { CartRepository } from "@infra/repositories/cart.repository";

export const getAllCartsService = async (): Promise<CartEntity[]> => {
    const carts = await CartRepository.find({});

    return carts;
};
