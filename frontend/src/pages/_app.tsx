import AppContext from "../hooks";
import GlobalStyle from "../styles/globals";

export default ({ Component, pageProps }) => {
    return (
        <>
            <AppContext>
                <GlobalStyle />
                <Component {...pageProps} />
            </AppContext>
        </>
    );
};
