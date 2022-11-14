import React, { createContext, useCallback, useState, useContext } from "react";

type NotificationType = "alert" | "warning" | "success";

interface Notification {
    title: string;
    message: string;
    type: NotificationType;
}

interface Context {
    handleNotification(cart: Notification): void;
    title: string;
    message: string;
    type: NotificationType;
    showNotification: boolean;
}

export const NotificationContext = createContext({} as Context);

export const NotificationProvider = ({ children }) => {
    const [title, setTitle] = useState<string>("Error");
    const [message, setMessage] = useState<string>("success");
    const [type, setType] = useState<NotificationType>("success");
    const [showNotification, setShowNotification] = useState<boolean>(false);

    const handleNotification = useCallback(
        async ({ title, message, type }: Notification) => {
            if (showNotification) {
                return;
            }

            setTitle(title);
            setMessage(message);
            setType(type);

            setShowNotification(true);

            setTimeout(() => {
                setShowNotification(false);
            }, 2000);
        },
        [setTitle, setMessage, setType, setShowNotification, showNotification],
    );

    return (
        <NotificationContext.Provider
            value={{
                handleNotification,
                title,
                message,
                type,
                showNotification,
            }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export function useNotification(): Context {
    const context = useContext(NotificationContext);

    if (!context) {
        throw new Error(
            "useNotification must be used within an NotificationProvider ",
        );
    }

    return context;
}
