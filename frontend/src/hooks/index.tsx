import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import DefaultTheme from "../styles/theme/default";
import { CartProvider } from "./useCart";
import { NotificationProvider } from "./useNotification";

const AppContext: React.FC<{ children: ReactNode }> = ({ children }) => (
    <NotificationProvider>
        <CartProvider>
            <ThemeProvider theme={DefaultTheme}>{children}</ThemeProvider>
        </CartProvider>
    </NotificationProvider>
);

export default AppContext;
