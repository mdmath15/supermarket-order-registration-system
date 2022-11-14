import { createCartController } from "@app/controllers/cart/create-cart.controller";
import { getAllCartsController } from "@app/controllers/cart/get-all-carts.controller";
import { Router } from "express";

const router = Router();

router.get("/", getAllCartsController);
router.post("/create-cart", createCartController);

export const CartRouter = router;
