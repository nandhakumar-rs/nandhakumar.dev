import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import TagManager from 'react-gtm-module';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

  useEffect(()=>{
    TagManager.initialize({ gtmId: process.env.GTM_ID as any})
  },[])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
