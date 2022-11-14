import { UnexpectedError } from "@app/errors/unexpected.error";
import { getAllCartsService } from "@domain/services/cart/get-all-carts.service";
import { Request, Response } from "express";

export const getAllCartsController = async (
    req: Request,
    res: Response,
): Promise<void> => {
    try {
        const carts = await getAllCartsService();

        res.json({ carts });
    } catch (error) {
        console.log(error);

        res.status(400).json(UnexpectedError);
    }
};
