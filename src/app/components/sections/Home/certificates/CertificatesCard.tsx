"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/lib/ui/carousel";
import { Title } from "@/app/components/ui/Title";

type Orientation = "portrait" | "landscape";

const carouselItems: {
  image: string;
  alt: string;
  orientation: Orientation;
}[] = [
  {
    image: "/images/certificates/fin-skill.jpg",
    alt: "топ-350 бизнеса страны",
    orientation: "portrait",
  },
  {
    image: "/images/certificates/ooo-delovaya-rossiya.jpg",
    alt: "топ бизнеса региона",
    orientation: "portrait",
  },
  {
    image: "/images/certificates/platin.jpg",
    alt: "лидер бухгалтерского аутсорсинга",
    orientation: "portrait",
  },
  // остальные — горизонтальные
  {
    image: "/images/certificates/netologiya.jpg",
    alt: "благодарственное письмо 2024 года",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/academiya-nastavnikov.jpg",
    alt: "благодарственное письмо 2023 года",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/masterskaya-nastavnikov.jpg",
    alt: "благодарственное письмо 2022 года",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/finansist.jpg",
    alt: "благодарственное письмо партнера за вклад в развитие Бизнеса Общества Мам",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/netologiya-lichnie-financy.jpg",
    alt: "личные финансы и инвестиции: как вложить деньги без ошибок",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/vesenniy-navigator.jpg",
    alt: "благодарственное письмо 2024 года от Я в деле",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/diplom-03-2010.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/diplom-30-2023.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/udostoverenie-04-11-2018.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/udostoverenie-21-09-2018.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/zimniy-ostrov-2035.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
  {
    image: "/images/certificates/vesenniy-navigator.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
];

export function CertificatesCard() {
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
    <div className="container">
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
        <div className="flex justify-between">
          <Title>Благодарственные письма</Title>

          <div className="hidden items-center gap-20 md:flex">
            <CarouselPrevious aria-label="Предыдущий">Предыдущий</CarouselPrevious>
            <CarouselNext aria-label="Следующий">Следующий</CarouselNext>
          </div>
        </div>

        <CarouselContent className="gap-10">
          {carouselItems.map((item, i) => {
            const isPortrait = item.orientation === "portrait";
            const desktopW = isPortrait ? 345 : 865;

            return (
              <CarouselItem
                key={i}
                className="shrink-0 basis-auto"
                style={{
                  width: `min(${desktopW}px, calc(100vw - 2rem))`,
                  flex: "0 0 auto",
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-md bg-white/30"
                  style={{ height: 488 }}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-contain"
                    sizes="(min-width: 1024px) 865px, 100vw"
                    priority={i < 2}
                  />
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
            className={`h-[0.37rem] w-[0.37rem] cursor-pointer rounded-full transition-colors md:h-[0.62rem] md:w-[0.62rem] ${
              i === currentSlide ? "bg-ocean" : "bg-[#626C7F]"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </div>
  );
}
