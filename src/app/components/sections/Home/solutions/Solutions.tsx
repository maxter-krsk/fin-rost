import { Title } from "@/app/components/ui/Title";
import { Button } from "@/lib/ui/button";
import Image from "next/image";
import { Separator } from "@/lib/ui/separator";

export function Solutions() {
  return (
    <section
      id="solutions"
      className="xs:mb-70 xs:scroll-mt-120 mb-50 scroll-mt-100 md:mb-90 lg:mb-120"
    >
      <div className="container">
        <Title>Решения</Title>
        <div className="lg:flex lg:items-center lg:justify-between">
          <ul className="desk:w-[45rem] text-12 xs:text-16 desk:text-20 font-bounded mb-36 flex flex-wrap text-center font-normal lg:mb-0 lg:w-[32.5rem]">
            <li className="relative flex w-1/2">
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Внедряем управленческий учёт
              </p>
            </li>
            <li className="relative flex w-1/2">
              <Separator
                orientation="vertical"
                gradientDirection="centerVertical"
                className="absolute top-0 right-0 left-0"
              />
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Строим финансовые модели и сценарии
              </p>
            </li>
            <li className="relative flex w-1/2">
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Сопровождаем управленческий учет ежемесячно
              </p>
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
            </li>
            <li className="relative flex w-1/2">
              <Separator
                orientation="vertical"
                gradientDirection="centerVertical"
                className="absolute top-0 right-0 left-0"
              />
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Разрабатываем антикризисные программы
              </p>
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
            </li>
            <li className="relative flex w-1/2">
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Настраиваем бюджетирование и платёжный календарь
              </p>
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
              <Separator
                gradientDirection="center"
                className="absolute right-0 bottom-0 left-0 hidden lg:block"
              />
            </li>
            <li className="relative flex w-1/2">
              <Separator
                orientation="vertical"
                gradientDirection="centerVertical"
                className="absolute top-0 right-0 left-0"
              />
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Обеспечиваем прозрачность
              </p>
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
              <Separator
                gradientDirection="center"
                className="absolute right-0 bottom-0 left-0 hidden lg:block"
              />
            </li>
          </ul>
          <Image
            className="desk:h-[25.25rem] desk:w-[28.313rem] hidden object-cover lg:block lg:h-[20.188rem] lg:w-[20.188rem] lg:flex-none"
            width={661}
            height={661}
            src="/images/solutions/grafic.png"
            alt="Декоративное изображения графика"
          />
          <div className="text-center lg:mt-auto lg:flex lg:justify-end">
            <Button variant="orange" href="#form" className="shrink-0">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
