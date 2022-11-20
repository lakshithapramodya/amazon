import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { wrapper } from "../app/store";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session} store={store}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default wrapper.withRedux(MyApp);
