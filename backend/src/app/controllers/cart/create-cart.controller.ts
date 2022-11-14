import { DateBeforeToday } from "@app/errors/date-before-today";
import { NotEnoughStorageError } from "@app/errors/enough-storage.error";
import { MissingBody } from "@app/errors/missing-body.error";
import { UnexpectedError } from "@app/errors/unexpected.error";
import { createCartService } from "@domain/services/cart/create-cart.service";
import { Request, Response } from "express";

interface UpsertCartDto {
    cart: {
        client_name: string;
        deliver_date: number;
        products: { id: number; quantity: number }[];
    };
}

export const createCartController = async (
    req: Request<any, any, UpsertCartDto>,
    res: Response,
): Promise<void> => {
    try {
        const { cart } = req.body;

        if (
            !cart ||
            !cart.client_name ||
            !cart.deliver_date ||
            !cart.products.length
        ) {
            throw MissingBody;
        }

        if (cart.deliver_date < Date.now()) {
            throw DateBeforeToday;
        }

        const newCart = await createCartService(cart);

        res.json(newCart);
    } catch (error) {
        console.log(error);

        switch (error) {
            case NotEnoughStorageError:
                res.status(400).json(error.message);
                break;

            case DateBeforeToday:
                res.status(400).json(error.message);
                break;

            case MissingBody:
                res.status(507).json(error.message);
                break;

            default:
                res.status(400).json(UnexpectedError);
                break;
        }
    }
};
