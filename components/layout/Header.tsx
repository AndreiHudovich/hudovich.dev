import Link from 'next/link'
import Logo from '@/assets/logo.svg'
import Container from '@/components/layout/Container.tsx'
import InternalLinks from '@/components/layout/navigation/InternalLinks.tsx'
import MobileNavigation from '@/components/layout/navigation/MobileNavigation.tsx'
import SocialLinks from '@/components/layout/navigation/SocialLinks.tsx'
import ThemeSwitcherDesktop from '@/components/layout/theme/ThemeSwitcherDesktop.tsx'
import ThemeSwitcherMobile from '@/components/layout/theme/ThemeSwitcherMobile.tsx'
import BaseIcon from '@/components/ui/BaseIcon.tsx'

function Header() {
  return (
    <header>
      <Container className="flex justify-between items-center h-20" fluid={true}>
        <Link href="/">
          <BaseIcon as={Logo} className="w-[4.125rem] h-6" label="Home" />
        </Link>

        <MobileNavigation className="md:hidden">
          <InternalLinks className="mb-6" />
          <SocialLinks className="mb-10" />
          <ThemeSwitcherMobile />
        </MobileNavigation>

        <div className="hidden md:flex md:items-center md:gap-8">
          <InternalLinks />
          <div className="md:flex md:gap-x-3">
            <SocialLinks />
            <ThemeSwitcherDesktop />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
