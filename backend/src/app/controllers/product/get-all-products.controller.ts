import { UnexpectedError } from "@app/errors/unexpected.error";
import { getAllProductsService } from "@domain/services/product/get-all-products.service";
import { Request, Response } from "express";

export const getAllProducts = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const products = await getAllProductsService();

        res.json({ products });
    } catch (error) {
        console.log(error);

        res.status(400).json(UnexpectedError);
    }
};
