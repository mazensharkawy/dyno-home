import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/future/image'
import Logo from 'src/images/logos/LOGO.png'

export function Header() {
  return (
    <header className="relative z-50 pb-11 lg:pt-11">
      <Container className="flex flex-wrap items-center justify-between lg:flex-nowrap">
        <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
          <Image src={Logo} className="h-12 w-auto text-slate-900" />
        </div>
        <div className="flex justify-end lg:grow lg:basis-0">
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 whitespace-nowrap lg:basis-0 lg:justify-end">
            <Button className="bg-indigo-600" href="https://app.editadsfast.com/signup">Sign up</Button>
          </div>
          <div className="hidden ml-5 sm:mt-10 sm:flex lg:mt-0 whitespace-nowrap lg:basis-0 lg:justify-end">
            <Button className="bg-indigo-600" href="https://app.editadsfast.com">Sign in</Button>
          </div>
        </div>
      </Container>
    </header>
  )
}
