import Image from "next/image";

export function AboutDesk() {
  return (
      <div className="hidden lg:block container">
        <article>
          <div
            className="mb-36 grid grid-cols-[0.8fr_1.2fr] items-center gap-20 desk:gap-70"
            aria-labelledby="founder-name"
          >
            <div className="ml-auto flex flex-col items-start">
              <Image
                src="/images/about/olga-kiryanova-desk.png"
                alt="Фотография Ольги Кирьяновой"
                width={350}
                height={403}
                className="h-auto w-[21.875rem] object-cover"
              />
              <div className="flex flex-col gap-10 bg-[linear-gradient(90deg,#24406F_0%,#0E1D3A_100%)] p-20">
                <h2 className="text-18 desk:text-20 font-bounded font-normal" id="founder-name">
                  Ольга Кирьянова
                </h2>
                <p className="text-16 desk:text-18 font-onest font-extralight">
                  Основатель компании «Финансовый Рост»
                </p>
                <figure>
                  <blockquote className="flex gap-16">
                    <span className="text-20 font-bounded text-orange font-normal">“</span>
                    <p className="text-16 desk:text-18 font-onest font-extralight">
                      Порядок в бизнесе —<br className="desk:hidden block" /> это порядок в жизни!
                    </p>
                  </blockquote>
                </figure>
              </div>
            </div>

            <div aria-labelledby="experience-heading">
              <h3 className="text-18 desk:text-20 font-bounded mb-40 desk:mb-30 font-normal" id="experience-heading">
                Эксперт по финансам&nbsp;
                <br className="desk:hidden block" />{" "}
                <span className="text-ocean">Опыт — 18+ лет</span>
              </h3>
              <ul className="text-16 desk:text-18 font-onest mb-40 desk:mb-20 flex flex-col gap-10 font-extralight">
                <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                  Прошла путь от кредитного специалиста до начальника отдела кредитования сегмента
                  МСБ и крупный бизнес
                </li>
                <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                  С 2018 года основатель компании по финансовому консалтингу
                </li>
                <li className="relative pl-26 before:absolute before:top-[0.4em] before:left-0 before:h-10 before:w-10 before:rounded-full before:bg-blue-400">
                  Помогаю бизнесу выстроить прозрачную финансовую систему, управлять прибылью и
                  принимать решения на основе цифр
                </li>
              </ul>
              <h3
                className="text-18 desk:text-20 font-bounded text-ocean mb-30 font-normal"
                id="communities-heading"
              >
                Участие в профессиональных
                <br className="desk:hidden block" /> сообществах
              </h3>
              <div aria-labelledby="communities-heading">
                <ul className="flex flex-wrap items-center gap-10">
                  <li>
                    <Image
                      src="/icons/logos/about/delovaya-rossiya.svg"
                      alt="Баннер Деловой России"
                      width={123}
                      height={40}
                      className="desk:w-[25rem] desk:h-[8.125rem]"
                    />
                  </li>
                  <li>
                    <Image
                      src="/icons/logos/about/faba-platinum.svg"
                      alt="Баннер Фаба Платинум"
                      width={123}
                      height={62}
                      className="desk:w-[15.938rem] desk:h-[8.063rem]"
                    />
                  </li>
                  <li>
                    <Image
                      src="/icons/logos/about/president-program.svg"
                      alt="Баннер Президентской программы"
                      width={82}
                      height={89}
                      className="desk:w-[7.75rem] desk:h-[8.125rem]"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </div>
  );
}
