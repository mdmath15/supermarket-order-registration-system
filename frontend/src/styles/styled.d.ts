import "styled-components";

declare module "styled-components" {
    export interface DefaultTheme {
        title: string;
        colors: {
            background: string;
            title: string;
            text: string;
            background_item: string;
            border_color: string;
            button_text: string;
            button_Background: string;
        };
        spacing: {
            sm: string;
            md: string;
            lg: string;
            xlg: string;
        };
        borderRadius: string;
        notification: {
            alert: string;
            warning: string;
            success: string;
        };
    }
}
