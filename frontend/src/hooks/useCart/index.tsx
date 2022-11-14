import { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import React, { createContext, useCallback, useContext } from "react";
import { axiosClient } from "../../config/axios";
import { useNotification } from "../useNotification";

interface Cart {
    id: number;
    client_name: string;
    deliver_date: number;
    value: number;
    products: number[];
}

interface CartUpdate {
    id?: number;
    client_name: string;
    deliver_date: number;
    products: { id: number; quantity: number }[];
}

interface Context {
    handleCart(cart: CartUpdate): void;
}

export const CartContext = createContext({} as Context);

export const CartProvider = ({ children }) => {
    const { handleNotification } = useNotification();
    const router = useRouter();

    const refreshData = () => {
        router.replace(router.asPath);
    };

    const handleCart = useCallback(async (cart: CartUpdate) => {
        try {
            const response = await axiosClient.post<
                CartUpdate,
                AxiosResponse<Cart>
            >("/carts/create-cart", { cart });
            if (response.status !== 200) {
                throw response;
            }

            handleNotification({
                title: "Sucesso",
                message: "Seu pedido foi realizado",
                type: "success",
            });

            return refreshData();
        } catch (error) {
            if (error.status === 507) {
                return handleNotification({
                    title: "Erro",
                    message: "Não há estoque suficiente para seu pedido",
                    type: "alert",
                });
            }
            return handleNotification({
                title: "Erro",
                message: "Erro ao processar seu pedido",
                type: "alert",
            });
        }
    }, []);

    return (
        <CartContext.Provider value={{ handleCart }}>
            {children}
        </CartContext.Provider>
    );
};

export function useCart(): Context {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used within an CartProvider ");
    }

    return context;
}
