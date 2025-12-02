import { Title } from "@/app/components/ui/Title";
import CircleElement from "@/app/components/ui/CircleElement";
import { Separator } from "@/lib/ui/separator";

export function Stageswork() {
  return (
    <section
      id="stages"
      className="xs:mb-70 xs:scroll-mt-120 mb-50 scroll-mt-100 md:mb-90 lg:mb-120"
    >
      <div className="container">
        <Title>Как мы работаем</Title>

        <div className="mt-6">
          <div className="relative w-full lg:mx-auto lg:w-fit">
            <div className="pointer-events-none absolute inset-0 hidden lg:block">
              <div className="absolute top-28 left-80 h-[0.063rem] w-[18.75rem] bg-gradient-to-r from-[#F4C96B] to-[#F4C96B]">
                <span className="absolute right-0 block -translate-y-1/2 border-y-[0.313rem] border-l-[0.5rem] border-y-transparent border-l-[#F4C96B]" />
              </div>

              <div className="absolute top-28 right-0 h-[8.625rem] w-[17.5rem] rounded-r-full border border-l-0 border-[#F4C96B]" />

              <div className="absolute bottom-90 left-80 h-[0.063rem] w-[18.75rem] bg-gradient-to-l from-[#F4C96B] to-[#F4C96B]">
                <span className="absolute left-0 block -translate-y-1/2 border-y-[0.313rem] border-r-[0.5rem] border-y-transparent border-r-[#F4C96B]" />
              </div>
            </div>

            <ul className="grid grid-cols-2 gap-x-40 gap-y-40 lg:w-fit">
              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">01</span>
                  </CircleElement>
                  <Separator className="hidden sm:block lg:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Знакомство</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  Бесплатная онлайн-встреча 20-30 минут: цели и запрос
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">02</span>
                  </CircleElement>
                  <Separator className="hidden sm:block lg:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Варианты</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  В течение 24 часов предлагаем решения и форматы
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">03</span>
                  </CircleElement>
                  <Separator className="hidden sm:block lg:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Сопровождение</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  Регулярные онлайн-встречи, отчёты, контроль
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">04</span>
                  </CircleElement>
                  <Separator className="hidden sm:block lg:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Договор</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
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
