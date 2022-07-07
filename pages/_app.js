import "../styles/globals.css";
import { FavoriteContextProvider } from "../context/allContext";

function MyApp({ Component, pageProps }) {
  return (
    <FavoriteContextProvider>
      {" "}
      <Component {...pageProps} />
    </FavoriteContextProvider>
  );
}

export default MyApp;
