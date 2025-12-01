import DevelopedBy from "@/app/components/ui/DevelopedBy";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/lib/ui/button";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="text-darkBlue desk:pt-30 desk:pb-120 relative bg-white pt-24 pb-68">
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
          className="mb-36 h-48 w-66"
          src="/icons/logos/logo-dark.svg"
          alt="Логотип компании"
          width={66}
          height={49}
        />
        <div className="desk:grid-cols-3 grid grid-cols-2 gap-20">
          <div className="flex flex-col gap-36">
            <nav aria-label="Навигация по разделам сайта">
              <ul className="text-14 md:text-16 font-bounded font-extraLight flex flex-col gap-16">
                <li>
                  <Link className="nav-link" href="#about">
                    Обо мне
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#problems">
                    Проблемы роста
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#solutions">
                    Решения
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#advantages">
                    Преимущества
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#stages">
                    Этапы работ
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#price">
                    Прайс
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#faq">
                    Вопросы и ответы
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="#regalia">
                    Регалии
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/news">
                    Новости
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="text-12 md:text-14 desk:text-16 font-onest flex flex-col gap-10 font-thin">
              <p>Работаем на территории России и стран СНГ</p>
              <Link className="nav-link" href="/privacy-policy">
                Политика конфиденциальности
              </Link>
            </div>

            <p>
              <small className="text-14 md:text-16 font-onest font-extralight">
                © Финансовый рост, {year}
              </small>
            </p>
          </div>

          <div className="desk:grid desk:grid-cols-2 desk:gap-x-60 desk:col-span-2 flex flex-col">
            <section
              className="mb-20 flex flex-col gap-24"
              aria-label="Контактная информация и социальные сети"
            >
              <h3 className="sr-only">Контактная информация и социальные сети</h3>

              <Button href="#form" variant="dark">
                Записаться
              </Button>

              <ul className="flex items-center gap-16">
                <li>
                  <Link
                    className="inline-block transition-transform duration-300 hover:scale-110"
                    href="#WhatsApp"
                    aria-label="Ссылка на WhatsApp"
                  >
                    <Image
                      className="h-24 w-24"
                      src="/icons/ui/socials/wa-dark.svg"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block transition-transform duration-300 hover:scale-110"
                    href="#Telegram"
                    aria-label="Ссылка на Telegram"
                  >
                    <Image
                      className="h-24 w-24"
                      src="/icons/ui/socials/tg-dark.svg"
                      alt="Telegram"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    className="inline-block transition-transform duration-300 hover:scale-110"
                    href="#YouTube"
                    aria-label="Ссылка на YouTube"
                  >
                    <Image
                      className="h-24 w-24"
                      src="/icons/ui/socials/youtube-dark.svg"
                      alt="YouTube"
                      width={24}
                      height={24}
                    />
                  </Link>
                </li>
              </ul>

              <address className="mt-4 not-italic">
                <ul className="text-14 md:text-16 font-onest flex flex-col gap-10 font-extralight">
                  <li>
                    <a className="nav-link" href="tel:+79080107559">
                      8 (908) 010-75-59
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="mailto:info@kiryanova-o.ru">
                      info@kiryanova-o.ru
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" href="mailto:bkkiryanova.o@yandex.ru">
                      bkkiryanova.o@yandex.ru
                    </a>
                  </li>
                </ul>
              </address>
            </section>

            <section aria-label="Информационный блок" className="flex flex-col gap-10">
              <h3 className="text-16 font-bounded mb-10 font-normal">Время работы:</h3>
              <p className="text-14 md:text-16 font-onest font-extralight">
                Пн—Пт: работаем с клиентами
              </p>
              <p className="text-14 md:text-16 font-onest font-extralight">Сб—Вс: выходной</p>
              <address className="text-14 desk:text-16 font-onest desk:mt-16 mt-14 flex flex-col gap-10 font-extralight not-italic md:mt-26">
                <p>ИП Кирьянова О.В. </p>
                <p>ИНН 246517268045</p>
                <p>ОГРНИП 318246800069120 </p>
                <p>Красноярский край, г. Красноярск </p>
              </address>
              <div className="mt-20 flex justify-start">
                <DevelopedBy />
              </div>
            </section>
          </div>
        </div>
      </div>
    </footer>
  );
}
