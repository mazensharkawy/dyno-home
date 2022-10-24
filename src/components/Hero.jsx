import Image from 'next/future/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background.jpg'

export function Hero() {
  return (
    <div className="relative pt-10 pb-20 sm:py-12">
      <div className="absolute inset-x-0 -top-48 -bottom-14 overflow-hidden bg-indigo-50">
        <Image
          className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
          src={backgroundImage}
          alt=""
          width={918}
          height={1495}
          priority
          unoptimized
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-3xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">EditAdsFast - </span>Ad Feeds on steroid
          </h1>
          <div className="mt-6 space-y-6 font-display text-xl tracking-tight text-blue-900">
            <p>
              Create eye-catching images for your Ad feeds and transform your product image into an Ad in itself.
              Our pipeline automatically edits your photo adding price, discount, title, your logo and even more.
            </p>
            <p>
              Just add your feed to your account, your export link to google feed,and you are good to go.
            </p>
          </div>
          <Button href="https://app.dynoads.com/signup" className="mt-10 mb-6 w-full sm:hidden bg-indigo-600 hover:bg-indigo-700">
            Sign up
          </Button>
          <a className="w-full sm:hidden underline inline-flex justify-center">Have an account? Sign in instead!</a>
        </div>
      </Container>
    </div>
  )
}
