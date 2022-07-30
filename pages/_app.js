import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Layout>
  );
}

export default MyApp;
