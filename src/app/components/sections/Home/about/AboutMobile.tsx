import Image from "next/image";
import { Title } from "@/app/components/ui/Title";
import { Separator } from "@/lib/ui/separator";

export function AboutMobile() {
  return (
    <section className="block lg:hidden" aria-labelledby="founder-title">
      <div className="container">
        <Title>Основатель компании</Title>
        <article>
          <div
            className="mb-36 flex md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-center"
            aria-labelledby="founder-name"
          >
            <div>
              <h2 className="text-18 font-bounded mb-10 font-normal" id="founder-name">
                Ольга Кирьянова
              </h2>

              <Separator className="mb-10" aria-hidden="true" />

              <p className="text-16 font-onest mb-10 font-extralight">
                Основатель компании «Финансовый Рост»
              </p>

              <figure className="mb-36">
                <blockquote className="flex gap-16">
                  <span className="text-20 font-bounded text-orange font-normal">“</span>
                  <p className="text-16 font-onest font-extralight">
                    Порядок в бизнесе —<br /> это порядок в жизни!
                  </p>
                </blockquote>
              </figure>

              <div aria-labelledby="communities-heading">
                <h3
                  className="text-16 font-bounded text-ocean mb-30 font-normal"
                  id="communities-heading"
                >
                  Участие в<br /> профессиональных
                  <br /> сообществах
                </h3>

                <ul className="flex flex-wrap items-center gap-10">
                  <li>
                    <Image
                      src="/icons/logos/about/delovaya-rossiya.svg"
                      alt="Баннер Деловой России"
                      width={106}
                      height={35}
                    />
                  </li>
                  <li>
                    <Image
                      src="/icons/logos/about/faba-platinum.svg"
                      alt="Баннер Фаба Платинум"
                      width={105}
                      height={53}
                    />
                  </li>
                  <li>
                    <Image
                      src="/icons/logos/about/president-program.svg"
                      alt="Баннер Президентской программы"
                      width={71}
                      height={77}
                    />
                  </li>
                </ul>
              </div>
            </div>

            <div className="hidden justify-center md:flex">
              <Image
                src="/images/about/olga-kiryanova-mobile.png"
                alt="Фотография Ольги Кирьяновой"
                width={300}
                height={350}
                className="h-[21.875rem] w-[18.75rem]"
              />
            </div>
          </div>

          <div aria-labelledby="experience-heading">
            <h3 className="text-14 font-bounded mb-20 font-normal" id="experience-heading">
              Эксперт по финансам | <span className="text-ocean">Опыт — 18+ лет</span>
            </h3>
            <ul className="text-16 font-onest flex flex-col gap-10 font-extralight">
              <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                Прошла путь от кредитного специалиста до начальника отдела кредитования сегмента МСБ
                и крупный бизнес
              </li>
              <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                С 2018 года основатель компании по финансовому консалтингу
              </li>
              <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                Помогаю бизнесу выстроить прозрачную финансовую систему, управлять прибылью и
                принимать решения на основе цифр
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
