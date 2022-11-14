import { ProductEntity } from "src/infra/entities/product.entity";
import { ProductRepository } from "src/infra/repositories/product.repository";

export const getAllProductsService = async (): Promise<ProductEntity[]> => {
    const products = await ProductRepository.find({});

    return products.map(products => ({
        ...products,
        price: products.price / 100,
    }));
};
