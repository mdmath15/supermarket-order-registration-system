import {
    createProductsController,
    getAllProducts,
} from "@app/controllers/product";
import { Router } from "express";

const router = Router();

router.get("/", getAllProducts);
router.post("/create", createProductsController);

export const ProductRouter = router;
