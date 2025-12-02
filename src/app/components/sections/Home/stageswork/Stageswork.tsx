import { Title } from "@/app/components/ui/Title";
import CircleElement from "@/app/components/ui/CircleElement";
import { Separator } from "@/lib/ui/separator";
import HorizontalArrow from "./HorizontalArrow";
import Semicircle from "./Semicircle";

export function Stageswork() {
  return (
    <section
      id="stages"
      className="xs:mb-70 xs:scroll-mt-120 mb-50 scroll-mt-100 md:mb-90 lg:mb-120"
    >
      <div className="container">
        <Title>Как мы работаем</Title>

        <div className="mt-6">
          <div className="relative w-full">
            <HorizontalArrow className="top-[1.5rem] left-[8%] w-[40%]" />
            <HorizontalArrow className="lg:top-[11rem] desk:top-[12rem] left-[8%] w-[40%] rotate-180" />
            <Semicircle className="top-[-2rem] left-[53.5%] w-[47%] h-[100%]" />
            <ul className="grid grid-cols-2 gap-x-40 gap-y-40 desk:gap-y-50">
              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="h-[2.5rem] w-[2.5rem] lg:h-[3.5rem] lg:w-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">01</span>
                  </CircleElement>
                  <Separator className="w-auto lg:w-[25rem] hidden sm:block desk:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Знакомство</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  Бесплатная онлайн-встреча 20-30 минут: цели и запрос
                </p>
              </li>

              <li>
                <div className="flex flex-col gap-10">
                  <CircleElement className="h-[2.5rem] w-[2.5rem] lg:h-[3.5rem] lg:w-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">02</span>
                  </CircleElement>
                  <Separator className="w-auto lg:w-[25rem] hidden sm:block desk:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Варианты</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  В течение 24 часов предлагаем решения и форматы
                </p>
              </li>

              <li className="desk:order-2">
                <div className="flex flex-col gap-10">
                  <CircleElement className="h-[2.5rem] w-[2.5rem] lg:h-[3.5rem] lg:w-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">03</span>
                  </CircleElement>
                  <Separator className="w-auto lg:w-[25rem] hidden sm:block desk:hidden" gradientDirection="center" />
                </div>
                <h2 className="font-bounded text-14 mt-10 font-normal">Сопровождение</h2>
                <p className="font-onest text-14 mt-10 font-extralight">
                  Регулярные онлайн-встречи, отчёты, контроль
                </p>
              </li>

              <li className="desk:order-1">
                <div className="flex flex-col gap-10">
                  <CircleElement className="h-[2.5rem] w-[2.5rem] lg:h-[3.5rem] lg:w-[3.5rem]">
                    <span className="font-bounded text-14 font-extralight">04</span>
                  </CircleElement>
                  <Separator className="w-auto lg:w-[25rem] hidden sm:block desk:hidden" gradientDirection="center" />
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
