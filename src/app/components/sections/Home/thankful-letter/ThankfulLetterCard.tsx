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
import { Skeleton } from "@/lib/ui/skeleton";

type Orientation = "portrait" | "landscape";

const carouselItems: {
  image: string;
  alt: string;
  orientation: Orientation;
}[] = [
  {
    image: "/images/thankful-letter/top-350.jpg",
    alt: "топ-350 бизнеса страны",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/top-business-region.jpg",
    alt: "топ бизнеса региона",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/leader-buhgaltersk-autsorsing.jpg",
    alt: "лидер бухгалтерского аутсорсинга",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2024.jpg",
    alt: "благодарственное письмо 2024 года",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2023.jpg",
    alt: "благодарственное письмо 2023 года",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2022.jpg",
    alt: "благодарственное письмо 2022 года",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/business-obshestva-mam.jpg",
    alt: "благодарственное письмо партнера за вклад в развитие Бизнеса Общества Мам",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/agentstvo-razvitiya.jpg",
    alt: "благодарственное письмо от Агентство развития малого и среднего предпринимательства",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/ya-v-dele-2023.jpg",
    alt: "благодарственное письмо 2023 года от Я в деле",
    orientation: "portrait",
  },
  {
    image: "/images/thankful-letter/ya-v-dele-2024.jpg",
    alt: "благодарственное письмо 2024 года от Я в деле",
    orientation: "landscape",
  },
  {
    image: "/images/thankful-letter/cantilen.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
    orientation: "landscape",
  },
];

export function ThankfulLetterCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

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
            const desktopW = isPortrait ? "21.5625rem" : "54.0625rem";

            return (
              <CarouselItem
                key={i}
                className="shrink-0 basis-auto"
                style={{
                  width: `min(${desktopW}, calc(100vw - 2rem))`,
                  flex: "0 0 auto",
                }}
              >
                <div
                  className="relative w-full overflow-hidden rounded-md bg-[radial-gradient(ellipse_at_top_right,_#4594E960_0%,_transparent_90%)]"
                  style={{ height: "30.5rem" }}
                >
                  {!imageLoaded[i] && (
                    <Skeleton className="absolute inset-0 z-20 h-full w-full animate-pulse rounded-md bg-gray-200" />
                  )}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className={`object-contain px-10 transition-opacity duration-500 md:p-20 ${
                      imageLoaded[i] ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(min-width: 1024px) 865px, 100vw"
                    priority={i < 2}
                    onLoad={() => setImageLoaded((prev) => ({ ...prev, [i]: true }))}
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
