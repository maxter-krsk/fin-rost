"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel";
import CircleElement from "@/app/components/ui/CircleElement";
import styles from "@/app/styles/modules/noise.module.css";

const carouselItems: {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Деньги уходят — <br /> маржа тает",
    description: "Доходы растут, а внизу всё равно «ноль»",
  },
  {
    number: "02",
    title: "Цифр много — <br /> ясности мало",
    description: "Отчёты ради отчётов. Бизнес не ускоряется",
  },
  {
    number: "03",
    title: "Дышим кассовыми <br /> разрывами",
    description: "Платим в минус, сорваны сроки и скидки",
  },
  {
    number: "04",
    title: "Банки и инвесторы <br /> разворачивают",
    description: "Нет чёткой финмодели и прогнозов",
  },
  {
    number: "05",
    title: "Никто не отвечает <br /> за финрезультат",
    description: "CFO нет, функции «размазаны» между всеми",
  },
  {
    number: "06",
    title: "Хаос вместо <br /> регламентов",
    description: "Бюджеты не утверждены, порядок не выстроен",
  },
];

export function BarrierCardsMobile() {
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
      <div className="xs:hidden">
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
            {carouselItems.map((item, i) => {
              return (
                <CarouselItem key={i}>
                  <div className="rounded-10 bg-darkBlue relative flex h-full basis-full flex-col gap-52 overflow-hidden p-20">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                    <div className={styles.noise} />
                    <CircleElement className="relative ml-auto h-[2.5rem] w-[2.5rem]">
                      <span className="font-bounded text-14 font-extralight">{item.number}</span>
                    </CircleElement>
                    <div className="relative flex flex-col gap-10">
                      <h2
                        className="font-bounded text-16 font-normal"
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                      <p className="font-onest text-16 font-extralight">{item.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>

        <div className="mt-36 flex items-center justify-center gap-4 md:hidden">
          {carouselItems.map((_, i) => (
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
