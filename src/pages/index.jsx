import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import FeedImagePreiew from '@/components/FeedImagePreiew'

export default function Home() {
  return (
    <>
      <Head>
        <title>EditAdsFast - Ad Feeds on steroid</title>
        <meta
          name="description"
          content="Create eye-catching images for your Ad feeds. Transform your product image into an Ad in itself.
          We automatically edit your ad image; add price, discount, title, your logo and even more."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeedImagePreiew />
      </main>
      <Footer />
    </>
  )
}
