import { PrismaORM } from "src/infra/prisma.config";
import { ProductEntity } from "src/infra/entities/product.entity";

const find = async (filter: unknown): Promise<ProductEntity[]> => {
    const products = await PrismaORM.product.findMany({
        where: filter,
        orderBy: { name: "asc" },
    });
    return products;
};

const create = async (data: ProductEntity[]): Promise<ProductEntity[]> => {
    await PrismaORM.product.createMany({ data });
    return data;
};

const update = async (
    filter: Partial<ProductEntity>,
    data: unknown,
): Promise<ProductEntity> => {
    const response = await PrismaORM.product.update({ where: filter, data });
    return response;
};

export const ProductRepository = {
    find,
    create,
    update,
};
