import { Title } from "@/app/components/ui/Title";
import { Button } from "@/lib/ui/button";
import Image from "next/image";
import { Separator } from "@/lib/ui/separator";

export function Solutions() {
  return (
    <section>
      <div className="container">
        <Title>Решения</Title>
        <div className="lg:flex lg:items-center lg:justify-between">
          <ul className="mb-36 flex flex-wrap text-center lg:mb-0 lg:w-[520px] desk:w-[720px] text-12 xs:text-16 desk:text-20 font-normal font-bounded">
            <li className="relative flex w-1/2">
              <Separator gradientDirection="center" className="absolute top-0 right-0 left-0" />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Внедряем управленческий учёт
              </p>
              <Separator
                orientation="vertical"
                gradientDirection="ttb"
                className="absolute top-0 right-0 bottom-0"
              />
            </li>
            <li className="relative flex w-1/2">
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
              <Separator
                orientation="vertical"
                gradientDirection="center"
                className="absolute top-0 right-0 bottom-0"
              />
            </li>
            <li className="relative flex w-1/2">
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Разрабатываем антикризисные программы
              </p>
            </li>
            <li className="relative flex w-1/2">
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Настраиваем бюджетирование и платёжный календарь
              </p>
              <Separator
                orientation="vertical"
                gradientDirection="btt"
                className="absolute top-0 right-0 bottom-0"
              />
            </li>
            <li className="relative flex w-1/2">
              <Separator
                gradientDirection="center"
                className="absolute top-0 right-0 left-0 lg:hidden"
              />
              <p className="flex flex-1 items-center justify-center p-20 lg:justify-start lg:text-left">
                Обеспечиваем прозрачность
              </p>
            </li>
          </ul>
          <Image
            className="desk:h-[404px] desk:w-[453px] hidden object-cover lg:block lg:h-[323px] lg:w-[323px] lg:flex-none"
            width={661}
            height={661}
            src="/images/solutions/grafic.png"
            alt="Декоративное изображения графика"
          />
          <div className="text-center lg:mt-auto lg:flex lg:justify-end">
            <Button variant="orange" href="#" className="shrink-0">
              Оставить заявку
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
