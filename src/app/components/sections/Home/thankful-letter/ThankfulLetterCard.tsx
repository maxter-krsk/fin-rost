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

const carouselItems = [
  {
    image: "/images/thankful-letter/top-350.jpg",
    alt: "топ-350 бизнеса страны",
  },
  {
    image: "/images/thankful-letter/top-business-region.jpg",
    alt: "топ бизнеса региона",
  },
  {
    image: "/images/thankful-letter/leader-buhgaltersk-autsorsing.jpg",
    alt: "лидер бухгалтерского аутсорсинга",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2024.jpg",
    alt: "благодарственное письмо 2024 года",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2023.jpg",
    alt: "благодарственное письмо 2023 года",
  },
  {
    image: "/images/thankful-letter/blagodarstvennoe-pismo-2022.jpg",
    alt: "благодарственное письмо 2022 года",
  },
  {
    image: "/images/thankful-letter/business-obshestva-mam.jpg",
    alt: "благодарственное письмо партнера за вклад в развитие Бизнеса Общества Мам",
  },
  {
    image: "/images/thankful-letter/agentstvo-razvitiya.jpg",
    alt: "благодарственное письмо от Агентство развития малого и среднего предпринимательства",
  },
  {
    image: "/images/thankful-letter/ya-v-dele-2023.jpg",
    alt: "благодарственное письмо 2023 года от Я в деле",
  },
  {
    image: "/images/thankful-letter/ya-v-dele-2024.jpg",
    alt: "благодарственное письмо 2024 года от Я в деле",
  },
  {
    image: "/images/thankful-letter/cantilen.jpg",
    alt: "благодарственное письмо 2024 года от cantilen",
  },
];
export function ThankfulLetterCard() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

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
        }}
        className="w-full"
      >
        <div className="flex justify-between">
          <Title>Благодарственные письма</Title>

          <div className="hidden items-center gap-20 md:flex">
            <CarouselPrevious aria-label="Предыдущий">Предыдущий</CarouselPrevious>
            <CarouselNext className="" aria-label="Следующий">
              Следующий
            </CarouselNext>
          </div>
        </div>

        <CarouselContent>
          {carouselItems.map((item, i) => (
            <CarouselItem
              key={i}
              className="xs:basis-1/2 basis-full pr-10 pl-0 last:pr-0 md:basis-1/3 lg:basis-1/4"
            >
              <div className="relative h-full w-full">
                <Image
                  className="h-full w-full object-contain"
                  src={item.image}
                  alt={item.alt}
                  width={345}
                  height={488}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="mt-36 block items-center justify-center gap-4 md:hidden">
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
