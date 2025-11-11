import Image from "next/image";
import Link from "next/link";
import { Button } from "@/lib/ui/button";
import { Burger } from "./Burger";

const socialLinks = [
  {
    src: "/icons/ui/socials/wa-icon-light.svg",
    alt: "WhatsApp",
    href: "#",
  },
  {
    src: "/icons/ui/socials/phone-icon-light.svg",
    alt: "Телефон",
    href: "#",
  },
  {
    src: "/icons/ui/socials/youtube-icon-light.svg",
    alt: "YouTube",
    href: "#",
  },
  {
    src: "/icons/ui/socials/tg-icon-light.svg",
    alt: "Telegram",
    href: "#",
  },
];

export default function Header() {
  return (
    <header className="my-20">
      <div className="container">
        <div className="flex items-center">
          <div className="xs:w-auto xs:justify-start xs:items-center xs:gap-30 flex w-full justify-between">
            <Link href="/">
              <Image
                src="/icons/logos/logo-light.svg"
                alt="Светлый логотип"
                width={68}
                height={49}
                className="h-40 w-52 lg:h-48 lg:w-68"
              />
            </Link>
            <Burger />
          </div>
          <div className="ml-auto flex gap-30">
            <ul className="rounded-12 hidden items-center gap-10 bg-white/10 p-4 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] lg:flex">
              {socialLinks.map(({ href, src, alt }) => (
                <li key={href} className="h-40 w-40">
                  <Link
                    href={href}
                    aria-label={alt}
                    className="rounded-12 flex h-full w-full items-center justify-center bg-white/10 transition-all active:scale-95"
                  >
                    <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
                  </Link>
                </li>
              ))}
            </ul>
            <Button className="xs:block hidden py-10 px-20 lg:py-14 lg:px-20" variant="light">
              Записаться
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
