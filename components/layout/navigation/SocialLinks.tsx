import IconBrandsGithub from '@/assets/icons/icon-brands-github.svg'
import IconBrandsXTwitter from '@/assets/icons/icon-brands-x-twitter.svg'
import BaseIcon from '@/components/ui/BaseIcon.tsx'
import { social } from '@/data/links.json'
import { cn } from '@/utils/css.ts'
import type { ComponentPropsWithoutRef, FC, SVGProps } from 'react'

const links: Array<{ href: string; label: string; Icon: FC<SVGProps<SVGElement>> }> = [
  {
    href: social.twitter,
    label: 'X / Twitter',
    Icon: IconBrandsXTwitter,
  },
  {
    href: social.github,
    label: 'Github',
    Icon: IconBrandsGithub,
  },
]

function SocialLinks({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn('flex justify-center items-center gap-x-4 md:gap-x-3', className)}
      {...props}
    >
      {links.map(({ Icon, href, label }) => (
        <a
          key={href}
          className="inline-block p-2 md:p-1.5"
          href={href}
          rel="noreferrer"
          target="_blank"
        >
          <BaseIcon
            as={Icon}
            className="size-7 text-dark-blue-950 dark:text-slate-100 md:size-5"
            label={label}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
