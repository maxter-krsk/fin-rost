"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel";

import styles from "@/app/styles/modules/noise.module.css";

const sliderItems: {
  title: string;
  description: string[];
  time?: string;
  cost: string;
}[] = [
  {
    title: "Консультация собственника",
    description: [
      "Разбор 1‑2 запросов",
      "Быстрые рекомендации по шагам",
      "Результат: понимание приоритетов и цифр",
    ],
    time: "60 минут",
    cost: "15 000 ₽",
  },
  {
    title: "Сопровождение управленческого учёта",
    description: [
      "Баланс, P&L, ДДС и свод KPI",
      "Презентация итогов раз в месяц",
      "Результат: прозрачность и управляемость",
    ],
    time: "В месяц",
    cost: "от 39 999 ₽",
  },
  {
    title: "Финансовая модель",
    description: [
      "Еxcel‑модель под ваш бизнес: выручка, маржинальность, сценарии, окупаемость",
      "Результат: решения на цифрах",
    ],
    cost: "от 47 999 ₽",
  },
  {
    title: "CFO на аутсорсе",
    description: [
      "Стратегия",
      "Еженедельное финпланирование",
      "Контроль отчётности",
      "Работа с банками/инвесторами",
      "Результат: стабильность",
    ],
    cost: "от 89 999 ₽",
  },
  {
    title: "Бизнес‑план",
    description: [
      "Документ для инвесторов/субсидий",
      "Риски",
      "Экономика",
      "Roadmap",
      "Результат: финансирование и рост",
    ],
    cost: "от 309 999 ₽",
  },
  {
    title: "Аудит учёта и отчётности",
    description: [
      "Проверка управленческого/бухгалтерского учёта",
      "Отчёт с выводами и рекомендациями",
      "Результат: корректный учёт",
    ],
    cost: "от 49 999 ₽",
  },
  {
    title: "Регламентация финблока",
    description: [
      "Положения",
      "Инструкции",
      "Регламенты бюджетирования/казначейства",
      "Результат: устойчивые процессы",
    ],
    cost: "от 59 999 ₽",
  },
];

export function PriceCardsSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="lg:hidden">
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: false,
            slidesToScroll: 1,
            containScroll: "trimSnaps",
            dragFree: false,
          }}
          className="w-full"
        >
          <CarouselContent className="gap-10">
            {sliderItems.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <div className="rounded-10 bg-darkBlue relative flex h-full basis-full flex-col gap-80 overflow-hidden p-30">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                    <div className={styles.noise} />
                    <div className="relative flex flex-col gap-24">
                      <h2 className="text-16 xs:text-18 font-bounded font-normal">{item.title}</h2>
                      <ul className="text-16 xs:text-18 font-onest text-mouse flex flex-col gap-10 font-extralight">
                        {item.description.map((descItem, index) => (
                          <li className="flex items-center gap-16" key={index}>
                            <span className="bg-ocean text-ocean block h-[0.5rem] w-[0.5rem] shrink-0 rounded-full"></span>
                            <p>{descItem}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="relative mt-auto flex justify-between">
                      <span className="text-14 xs:text-16 font-onest text-mouse font-extralight">
                        {item.time}
                      </span>
                      <p className="text-16 xs:text-18 font-bounded font-extralight">{item.cost}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="mt-36 flex items-center justify-center gap-4 lg:hidden">
          {sliderItems.map((_, i) => (
            <button
              key={i}
              className={`h-[0.375rem] w-[0.375rem] cursor-pointer rounded-full transition-colors ${
                i === currentSlide ? "bg-ocean" : "bg-[#626C7F]"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
