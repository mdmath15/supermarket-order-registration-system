import { Product } from "@prisma/client";

export class ProductEntity implements Product {
    id: number;
    name: string;
    price: number;
    qty_stock: number;
}
