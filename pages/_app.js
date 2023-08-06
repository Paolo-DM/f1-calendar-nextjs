import { NextUIProvider } from "@nextui-org/react";
import Layout from "../components/Layout";
import { Analytics } from "@vercel/analytics/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextUIProvider>
        <Component {...pageProps} />
        <Analytics />
      </NextUIProvider>
    </Layout>
  );
}

export default MyApp;
