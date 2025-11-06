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
  return (
    <Link className="group block h-full" href={link}>
      <div className="rounded-12 bg-darkBlue relative flex h-full flex-col gap-20 overflow-hidden border border-white/30 p-20 lg:p-30">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
        <div className={styles.noise} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
        <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-20">
          <Image
            className="rounded-10 h-[12.5rem] w-full object-cover"
            src={image}
            alt={alt}
            width={407}
            height={199}
          />
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
