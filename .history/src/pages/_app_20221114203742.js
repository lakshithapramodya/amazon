import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <Provider session={session} store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
