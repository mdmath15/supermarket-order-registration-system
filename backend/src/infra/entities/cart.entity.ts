import { Cart, CartStatus } from "@prisma/client";

export class CartEntity implements Cart {
    id: number;
    client_name: string;
    deliver_date: Date;
    value: number;
    status: "PENDING" | "COMPLETED";
}
