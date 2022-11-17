import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import TagManager from 'react-gtm-module'
import { useEffect } from 'react'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    console.log("ENV",process.env.NEXT_PUBLIC_VERCEL_ENV )
    TagManager.initialize({ gtmId: process.env.GTM_ID || '' })
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  )
}
