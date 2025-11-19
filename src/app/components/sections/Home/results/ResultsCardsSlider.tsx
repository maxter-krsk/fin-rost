"use client";

import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel";
import Image from "next/image";

const carouselItems = [
  {
    title: "Постоянно развиваемся и повышаем квалификацию",
    image: "/icons/ui/features/qualification.svg",
    alt: "Иконка сертификата или документа, символизирующая постоянное развитие и повышение квалификации",
  },
  {
    title: "Работаем в ваши сроки, без отвлечений",
    image: "/icons/ui/features/deadlines.svg",
    alt: "Иконка календаря с галочкой, обозначающая соблюдение сроков и выполнение работ вовремя",
  },
  {
    title: "Полная защита данных",
    image: "/icons/ui/features/security.svg",
    alt: "Иконка портфеля с защитным щитом, гарантирующая полную защиту данных и конфиденциальность",
  },
  {
    title: "Приходим без затрат на обучение",
    image: "/icons/ui/features/education.svg",
    alt: "Иконки документов или инструкций, символизирующие отсутствие затрат на обучение с нашей стороны",
  },
  {
    title: "Работаем удалённо по РФ и СНГ",
    image: "/icons/ui/features/remote.svg",
    alt: "Иконки графика роста и метки геолокации, показывающие удаленную работу по РФ и СНГ",
  },
];

type CardItem = (typeof carouselItems)[number];

export function ResultsCardsSlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides: CardItem[][] = [];
  for (let i = 0; i < carouselItems.length; i += 2) {
    slides.push(carouselItems.slice(i, i + 2));
  }

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrentSlide(api.selectedScrollSnap());
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="container md:hidden block w-full max-w-[480px] mx-auto">
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
        <CarouselContent>
          {slides.map((slideItems, slideIndex) => (
            <CarouselItem key={slideIndex} className="w-full h-[258px]">
              <div
                className={`grid h-full w-full gap-10 ${
                  slideItems.length === 1 ? "grid-cols-1" : "grid-cols-2"
                }`}
              >
                {slideItems.map((item, i) => (
                  <div
                    key={i}
                    className="relative flex h-full w-full overflow-hidden rounded-10 border border-white/30 bg-darkBlue p-20 desk:p-30"
                  >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />

                    <div className="relative z-10 flex h-full w-full flex-col">
                      <h2 className="text-12 sm:text-18 desk:text-20 font-bounded text-center desk:text-left font-normal">
                        {item.title}
                      </h2>
                      <div className="mt-auto flex justify-center">
                        <Image width={132} height={108} src={item.image} alt={item.alt} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-36 flex items-center justify-center gap-4 desk:hidden">
        {slides.map((_, i) => (
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
  );
}
