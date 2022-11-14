import { createProductsService } from "@domain/services/product/create-products.service";
import ProductJson from "./products.json";

createProductsService(
    ProductJson.map(product => {
        return {
            ...product,
            price: parseInt(product.price.toString().replace(".", "")),
        };
    }),
);
