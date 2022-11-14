import { ProductEntity } from "@infra/entities/product.entity";
import { ProductRepository } from "@infra/repositories/product.repository";

export const createProductsService = async (
    data: ProductEntity[],
): Promise<ProductEntity[]> => {
    return ProductRepository.create(data);
};
