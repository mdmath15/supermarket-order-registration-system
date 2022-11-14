import { Router } from "express";
import { CartRouter } from "./cart/cart.route";
import { ProductRouter } from "./product/product.route";

const router = Router();

router.use("/products", ProductRouter);
router.use("/carts", CartRouter);

export { router };
