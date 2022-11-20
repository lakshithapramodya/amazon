import { store } from "../app/store";
import "../styles/globals.css";
import { Provider } from "next-auth/react";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider session={session} store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
