"use client";

import { useState } from "react";
import { Skeleton } from "@/lib/ui/skeleton";

import styles from "@/app/styles/modules/noise.module.css";

import Image from "next/image";
import Link from "next/link";

type NewsCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  link: string;
  date: string;
};

export function NewsCard({ image, alt, title, description, link, date }: NewsCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link className="group block h-full" href={link}>
      <div className="rounded-12 bg-darkBlue relative flex h-full flex-col gap-20 overflow-hidden border border-white/30 p-20 lg:p-30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
        <div className={styles.noise} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
        <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-20">
          <div className="relative h-[12.5rem] w-full flex-shrink-0">
            {!imageLoaded && (
              <Skeleton className="absolute inset-0 z-20 animate-pulse rounded-md bg-gray-500 opacity-80" />
            )}
            <Image
              className={`rounded-10 absolute inset-0 h-full w-full object-cover ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              src={image}
              alt={alt}
              width={407}
              height={199}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          <h2 className="font-bounded text-14 xs:text-16 md:text-18 lg:text-20 line-clamp-2">
            {title}
          </h2>
          <p className="text-14 xs:text-16 lg:text-18 line-clamp-3">{description}</p>

          <div className="text-mouse mt-auto flex justify-between">
            <span className="text-14 xs:text-16 lg:text-18 underline">Читать</span>
            <span className="text-14 xs:text-16">{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
