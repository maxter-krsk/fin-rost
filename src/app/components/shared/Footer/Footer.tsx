import DevelopedBy from "@/app/components/ui/DevelopedBy";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/lib/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  const links: [string, string][] = [
    ["Обо мне", "/#about"],
    ["Проблемы роста", "/#problems"],
    ["Решения", "/#solutions"],
    ["Преимущества", "/#advantages"],
    ["Этапы работ", "/#stages"],
    ["Прайс", "/#price"],
    ["Вопросы и ответы", "/#faq"],
    ["Регалии", "/#regalia"],
    ["Новости", "/news"],
  ];

  const socialLinks = [
    { src: "/icons/ui/socials/wa-dark.svg", alt: "WhatsApp", href: "#wa" },
    { src: "/icons/ui/socials/tg-dark.svg", alt: "Telegram", href: "#tg" },
    { src: "/icons/ui/socials/youtube-dark.svg", alt: "YouTube", href: "#youtube" },
  ];

  return (
    <>
      <footer id="footer" className="text-darkBlue desk:pt-30 desk:pb-60 relative hidden bg-white pt-24 pb-68 lg:block">
        <div className="desk:block pointer-events-none absolute inset-x-0 -top-[4.938rem] hidden h-100 overflow-hidden">
          <Image
            src="/icons/ui/subtract.svg"
            alt="Декоративный вырез"
            aria-hidden="true"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container">
          <Image
            className="mb-50 h-48 w-66"
            src="/icons/logos/logo-dark.svg"
            alt="Логотип компании"
            width={66}
            height={49}
          />
          <div className="flex flex-wrap justify-between gap-y-36">
            <div>
              <nav>
                <ul className="flex flex-col gap-16">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-14 xs:text-16 font-bounded nav-link font-light"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex flex-col">
              <ul className="flex justify-start gap-16">
                {socialLinks.map(({ href, src, alt }) => (
                  <li key={href} className="mb-20 h-22 w-22">
                    <Link
                      className="inline-block transition-transform duration-300 hover:scale-110"
                      href={href}
                      aria-label={alt}
                    >
                      <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mb-20 flex flex-col gap-10">
                <Link className="nav-link" href="tel:+79080107559">
                  8 (908) 010-75-59
                </Link>
                <Link className="nav-link" href="mailto:info@kiryanova-o.ru">
                  info@kiryanova-o.ru
                </Link>
                <Link className="nav-link" href="mailto:bkkiryanova.o@yandex.ru">
                  bkkiryanova.o@yandex.ru
                </Link>
              </div>
              <div>
                <h3 className="font-bounded mb-20 font-normal">Время работы:</h3>
                <p className="mb-10 font-light">Пн—Пт: работаем с клиентами</p>
                <p>Сб—Вс: выходной</p>
              </div>
              <p className="mt-auto">
                <small className="text-14 md:text-16 font-light">© Финансовый рост, {year}</small>
              </p>
            </div>
            <div className="flex flex-col">
              <Button className="max-w-non mb-66 w-full" href="#form" variant="dark">
                Записаться
              </Button>
              <div className="mb-20 space-y-10">
                <p className="font-light">ИП Кирьянова О.В. </p>
                <p className="font-light">ИНН 246517268045</p>
                <p className="font-light">ОГРНИП 318246800069120 </p>
                <p className="font-light">Красноярский край, г. Красноярск </p>
              </div>
              <p className="font-thin">Работаем на территории России и странам СНГ</p>
              <Link className="nav-link mt-auto font-thin" href="/privacy-policy">
                Политика конфиденциальности
              </Link>
            </div>
          </div>
          <div className="mt-70 flex justify-center">
            <DevelopedBy />
          </div>
        </div>
      </footer>

      <footer className="text-darkBlue relative hidden bg-white pt-24 pb-68 sm:block lg:hidden">
        <div className="container">
          <Image
            className="mb-50 h-48 w-66"
            src="/icons/logos/logo-dark.svg"
            alt="Логотип компании"
            width={66}
            height={49}
          />
          <div className="flex justify-between gap-10">
            <div>
              <nav>
                <ul className="mb-36 flex flex-col gap-16">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link
                        href={href}
                        className="text-14 xs:text-16 font-bounded nav-link font-light"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="space-y-10">
                <div className="mb-36">
                  <p className="font-light">ИП Кирьянова О.В. </p>
                  <p className="font-light">ИНН 246517268045</p>
                  <p className="font-light">ОГРНИП 318246800069120 </p>
                  <p className="font-light">Красноярский край, г. Красноярск </p>
                </div>
                <p>
                  <small className="text-14 md:text-16 font-light">
                    © Финансовый рост, {year}
                  </small>
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <Button className="mb-36 w-full max-w-none" href="#form" variant="dark">
                Записаться
              </Button>
              <ul className="flex justify-start gap-16">
                {socialLinks.map(({ href, src, alt }) => (
                  <li key={href} className="mb-20 h-22 w-22">
                    <Link
                      className="inline-block transition-transform duration-300 hover:scale-110"
                      href={href}
                      aria-label={alt}
                    >
                      <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mb-20 flex flex-col gap-10">
                <Link className="nav-link" href="tel:+79080107559">
                  8 (908) 010-75-59
                </Link>
                <Link className="nav-link" href="mailto:info@kiryanova-o.ru">
                  info@kiryanova-o.ru
                </Link>
                <Link className="nav-link" href="mailto:bkkiryanova.o@yandex.ru">
                  bkkiryanova.o@yandex.ru
                </Link>
              </div>
              <div className="flex h-full flex-col">
                <div>
                  <h3 className="font-bounded mb-20 font-normal">Время работы:</h3>
                  <p className="mb-10 font-light">Пн—Пт: работаем с клиентами</p>
                  <p>Сб—Вс: выходной</p>
                </div>
                <div className="mt-auto">
                  <p className="mb-10 font-thin">Работаем на территории России и странам СНГ</p>
                  <Link className="nav-link font-thin" href="/privacy-policy">
                    Политика конфиденциальности
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-70 flex justify-center">
            <DevelopedBy />
          </div>
        </div>
      </footer>

      <footer className="text-darkBlue relative block bg-white pt-24 pb-68 sm:hidden">
        <div className="container">
          <Image
            className="mb-24 h-48 w-66"
            src="/icons/logos/logo-dark.svg"
            alt="Логотип компании"
            width={66}
            height={49}
          />
          <div className="flex flex-col">
            <div>
              <nav>
                <ul className="mb-20 flex flex-col gap-14">
                  {links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-14 font-bounded nav-link font-light">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <Button className="mb-20 w-full max-w-none" href="#form" variant="dark">
                Записаться
              </Button>
              <ul className="flex justify-start gap-16">
                {socialLinks.map(({ href, src, alt }) => (
                  <li key={href} className="mb-20 h-22 w-22">
                    <Link
                      className="inline-block transition-transform duration-300 hover:scale-110"
                      href={href}
                      aria-label={alt}
                    >
                      <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="text-14 mb-20 flex flex-col gap-10">
                <Link className="nav-link" href="tel:+79080107559">
                  8 (908) 010-75-59
                </Link>
                <Link className="nav-link" href="mailto:info@kiryanova-o.ru">
                  info@kiryanova-o.ru
                </Link>
                <Link className="nav-link" href="mailto:bkkiryanova.o@yandex.ru">
                  bkkiryanova.o@yandex.ru
                </Link>
              </div>
              <div className="text-14 flex h-full flex-col">
                <div className="mb-20">
                  <h3 className="font-bounded mb-20 font-normal">Время работы:</h3>
                  <p className="mb-10 font-light">Пн—Пт: работаем с клиентами</p>
                  <p>Сб—Вс: выходной</p>
                </div>
                <div className="mb-20">
                  <p className="font-light">ИП Кирьянова О.В. </p>
                  <p className="font-light">ИНН 246517268045</p>
                  <p className="font-light">ОГРНИП 318246800069120 </p>
                  <p className="font-light">Красноярский край, г. Красноярск </p>
                </div>
                <div className="mb-20">
                  <p className="mb-10 font-thin">Работаем на территории России и странам СНГ</p>
                  <Link className="nav-link font-thin" href="/privacy-policy">
                    Политика конфиденциальности
                  </Link>
                </div>
              </div>
              <div className="space-y-10">
                <p>
                  <small className="text-14 md:text-16 font-light">
                    © Финансовый рост, {year}
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="mt-50 flex justify-center">
            <DevelopedBy />
          </div>
        </div>
      </footer>
    </>
  );
}
