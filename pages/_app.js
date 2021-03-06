import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/Layout'
import { DefaultSeo } from 'next-seo'
import SEO from '../next-seo.config'
import * as gtag from '../lib/gtag'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <DefaultSeo {...SEO}/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
