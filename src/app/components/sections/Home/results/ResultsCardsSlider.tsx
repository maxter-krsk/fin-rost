"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/lib/ui/carousel";

import Image from "next/image";
import styles from "@/app/styles/modules/noise.module.css";
import { Skeleton } from "@/lib/ui/skeleton";

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
  const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>({});
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="container mx-auto block w-full max-w-[480px] md:hidden">
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
              <CarouselItem key={slideIndex} className="h-[258px] w-full">
                <div
                  className={`grid h-full w-full gap-10 ${
                    slideItems.length === 1 ? "grid-cols-1" : "grid-cols-2"
                  }`}
                >
                  {slideItems.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-10 bg-darkBlue desk:p-30 relative flex h-full w-full overflow-hidden border border-white/30 p-20"
                    >
                      <div className={styles.noise} />
                      <div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: "url(/icons/ui/square-texture.svg)",
                          backgroundPosition: "center",
                          backgroundSize: "cover",
                        }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />

                      <div className="relative z-10 flex h-full w-full flex-col">
                        <h2 className="text-12 xs:text-16 font-bounded desk:text-left text-center font-normal">
                          {item.title}
                        </h2>
                        <div className="mt-auto flex justify-center">
                          <div className="relative h-[6.75rem] w-[6.875rem] flex-shrink-0">
                            {!imageLoaded[`${slideIndex}-${i}`] && (
                              <Skeleton className="absolute inset-0 z-20 animate-pulse rounded-md bg-gray-500 opacity-80" />
                            )}
                            <Image
                              className={`absolute inset-0 h-full w-full rounded-md object-contain ${
                                imageLoaded[`${slideIndex}-${i}`] ? "opacity-100" : "opacity-0"
                              }`}
                              onLoad={() =>
                                setImageLoaded((prev) => ({
                                  ...prev,
                                  [`${slideIndex}-${i}`]: true,
                                }))
                              }
                              width={132}
                              height={108}
                              src={item.image}
                              alt={item.alt}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="desk:hidden mt-36 flex items-center justify-center gap-4">
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
    </motion.div>
  );
}
