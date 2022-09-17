import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import FeedImagePreiew from '@/components/FeedImagePreiew'

export default function Home() {
  return (
    <>
      <Head>
        <title>DeceptiConf - A community-driven design conference</title>
        <meta
          name="description"
          content="At DeceptiConf you’ll learn about the latest dark patterns being developed to trick even the smartest visitors, and you’ll learn how to deploy them without ever being detected."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <FeedImagePreiew />
        {/* <Schedule />
        <Sponsors />
        <Newsletter /> */}
      </main>
      <Footer />
    </>
  )
}
