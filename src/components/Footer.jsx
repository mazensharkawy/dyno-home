import { Container } from '@/components/Container'
import Image from 'next/future/image'
import Logo from 'src/images/logos/LOGO.png'

export function Footer() {
  return (
    <footer className="py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <Image objectFit="content" src={Logo} className="sm:h-12 w-auto" />
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} EditAdsFast. All rights
          reserved.
        </p>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Contact us: support@editadsfast.com
        </p>
      </Container>
    </footer>
  )
}
