import { UnexpectedError } from "@app/errors/unexpected.error";
import { createProductsService } from "@domain/services/product/create-products.service";
import { Request, Response } from "express";

interface CreateProductsDto {
    products: { id: number; name: string; price: number; qty_stock: number }[];
}

export const createProductsController = async (
    req: Request<any, any, CreateProductsDto>,
    res: Response,
): Promise<void> => {
    try {
        const { products } = req.body;

        if (!products) {
            res.status(400).json({ error: "Products is not in body" });
            return;
        }

        const productCreated = await createProductsService(products);

        res.json({ productCreated });
    } catch (error) {
        console.log(error);

        res.status(400).json(UnexpectedError);
    }
};
