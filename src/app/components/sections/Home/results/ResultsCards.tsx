"use client";

import { useState } from "react";

import Image from "next/image";
import styles from "@/app/styles/modules/noise.module.css";
import { Skeleton } from "@/lib/ui/skeleton";

const cardsItems = [
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

export function ResultsCards() {
  const [imageLoaded, setImageLoaded] = useState<Record<number, boolean>>({});

  return (
    <div className="container hidden gap-10 md:grid md:grid-cols-2 md:grid-rows-3 lg:grid-cols-5 lg:grid-rows-1">
      {cardsItems.map((item, i) => (
        <div
          key={i}
          className="desk:min-h-[25.75rem] rounded-10 bg-darkBlue desk:p-30 relative flex justify-center overflow-hidden border border-white/30 p-20 lg:min-h-[19.313rem]"
        >
          <div className={styles.noise} />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url(/icons/ui/square-texture.svg)",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="relative z-10 flex h-full flex-col items-center justify-between gap-20">
            <div className="flex items-start">
              <h2 className="text-14 desk:text-20 font-bounded font-normal md:text-center lg:text-left">
                {item.title}
              </h2>
            </div>

            <div className="desk:h-[8.5rem] desk:w-[11.063rem] relative h-[6.75rem] w-[8.25rem] flex-shrink-0">
              {!imageLoaded[i] && (
                <Skeleton className="absolute inset-0 z-20 animate-pulse rounded-md bg-gray-500 opacity-80" />
              )}
              <Image
                className={`absolute inset-0 h-full w-full rounded-md object-contain ${
                  imageLoaded[i] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded((prev) => ({ ...prev, [i]: true }))}
                width={177}
                height={136}
                src={item.image}
                alt={item.alt}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
