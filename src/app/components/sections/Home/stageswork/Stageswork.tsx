import { Title } from "@/app/components/ui/Title";
import CircleElement from "@/app/components/ui/CircleElement";
import { Separator } from "@/lib/ui/separator";

export function Stageswork() {
  return (
    <section>
      <div className="container">
        <Title>Как мы работаем</Title>

        <div className="mt-6">
          <div className="relative w-full lg:w-fit lg:mx-auto">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute left-80 top-28 w-[18.75rem] h-[0.063rem] bg-gradient-to-r from-[#F4C96B] to-[#F4C96B]">
                <span className="absolute right-0 -translate-y-1/2 block border-l-[0.5rem] border-l-[#F4C96B] border-y-[0.313rem] border-y-transparent" />
              </div>

              <div className="absolute right-0 top-28 w-[17.5rem] h-[8.625rem] border border-[#F4C96B] border-l-0 rounded-r-full" />

              <div className="absolute left-80 bottom-90 w-[18.75rem] h-[0.063rem] bg-gradient-to-l from-[#F4C96B] to-[#F4C96B]">
                <span className="absolute left-0 -translate-y-1/2 block border-r-[0.5rem] border-r-[#F4C96B] border-y-[0.313rem] border-y-transparent" />
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-x-20 gap-y-20 lg:w-fit">
              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement size={56}>
                    <span className="font-bounded text-14 font-extralight">
                      01
                    </span>
                  </CircleElement>
                  <Separator
                    className="hidden sm:block lg:hidden"
                    gradientDirection="center"
                  />
                </div>
                <h2 className="mt-10 font-bounded text-14 font-normal">
                  Знакомство
                </h2>
                <p className="mt-10 font-onest text-14 font-extralight">
                  Бесплатная онлайн-встреча 20-30 минут: цели и запрос
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement size={56}>
                    <span className="font-bounded text-14 font-extralight">
                      02
                    </span>
                  </CircleElement>
                  <Separator
                    className="hidden sm:block lg:hidden"
                    gradientDirection="center"
                  />
                </div>
                <h2 className="mt-10 font-bounded text-14 font-normal">
                  Варианты
                </h2>
                <p className="mt-10 font-onest text-14 font-extralight">
                  В течение 24 часов предлагаем решения и форматы
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement size={56}>
                    <span className="font-bounded text-14 font-extralight">
                      03
                    </span>
                  </CircleElement>
                  <Separator
                    className="hidden sm:block lg:hidden"
                    gradientDirection="center"
                  />
                </div>
                <h2 className="mt-10 font-bounded text-14 font-normal">
                  Сопровождение
                </h2>
                <p className="mt-10 font-onest text-14 font-extralight">
                  Регулярные онлайн-встречи, отчёты, контроль
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement size={56}>
                    <span className="font-bounded text-14 font-extralight">
                      04
                    </span>
                  </CircleElement>
                  <Separator
                    className="hidden sm:block lg:hidden"
                    gradientDirection="center"
                  />
                </div>
                <h2 className="mt-10 font-bounded text-14 font-normal">
                  Договор
                </h2>
                <p className="mt-10 font-onest text-14 font-extralight">
                  Подписываем, выставляем счёт, стартуем в тот же день
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
