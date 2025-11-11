"use client";

import { useState } from "react";
import Image from "next/image";
import { Popover, PopoverTrigger, PopoverContent } from "@/lib/ui/popover";
import { Button } from "@/lib/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export function Burger() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Обо мне", "#about"],
    ["Проблемы роста", "#problems"],
    ["Решения", "#solutions"],
    ["Преимущества", "#advantages"],
    ["Этапы работ", "#stages"],
    ["Прайс", "#price"],
    ["Вопросы и ответы", "#faq"],
    ["Регалии", "#regalia"],
    ["Новости", "/news"],
  ];

  const socialLinks = [
    {
      src: "/icons/ui/socials/wa-icon-light.svg",
      alt: "WhatsApp",
      href: "#",
    },
    {
      src: "/icons/ui/socials/phone-icon-light.svg",
      alt: "Телефон",
      href: "#",
    },
    {
      src: "/icons/ui/socials/youtube-icon-light.svg",
      alt: "YouTube",
      href: "#",
    },
    {
      src: "/icons/ui/socials/tg-icon-light.svg",
      alt: "Telegram",
      href: "#",
    },
  ];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="light" className="flex items-center gap-10 py-10 px-20 lg:py-14 lg:px-20">
          <span className="xs:block text-16 md:text-18 hidden">Меню</span>
          <div className="relative h-8 w-20">
            <svg
              className={`absolute top-1/2 left-0 h-[0.125rem] w-20 origin-center transition-transform duration-300 ease-in-out [transform-box:fill-box] ${
                open ? "-translate-y-1/2 rotate-45" : "translate-y-[calc(-50%_-_3px)] rotate-0"
              } xs:translate-y-[calc(-50%_-_3px)] xs:rotate-0 xs:transition-none`}
              viewBox="0 0 20 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 1.5H0.75C0.34 1.5 0 1.16 0 0.75C0 0.34 0.34 0 0.75 0H18.75C19.16 0 19.5 0.34 19.5 0.75C19.5 1.16 19.16 1.5 18.75 1.5Z"
                fill="white"
              />
            </svg>
            <svg
              className={`absolute top-1/2 left-0 h-[0.125rem] w-20 origin-center transition-transform duration-300 ease-in-out [transform-box:fill-box] ${
                open ? "-translate-y-1/2 -rotate-45" : "translate-y-[calc(-50%_+_3px)] rotate-0"
              } xs:translate-y-[calc(-50%_+_3px)] xs:rotate-0 xs:transition-none`}
              viewBox="0 0 20 2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.75 1.5H0.75C0.34 1.5 0 1.16 0 0.75C0 0.34 0.34 0 0.75 0H18.75C19.16 0 19.5 0.34 19.5 0.75C19.5 1.16 19.16 1.5 18.75 1.5Z"
                fill="white"
              />
            </svg>
          </div>
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={12}
        collisionPadding={16}
        className="rounded-12 w-[min(21.875rem,calc(100vw-2rem))] border border-white/20 bg-white/10 p-20 text-white [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] backdrop-blur-md sm:w-[21.875rem] sm:p-30"
      >
        <div className="flex items-start justify-between">
          <nav className="flex flex-col gap-10">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="text-14 xs:text-16 font-bounded font-normal hover:underline"
              >
                {label}
              </Link>
            ))}
          </nav>
          <motion.button
            className="xs:block hidden"
            onClick={() => setOpen(false)}
            aria-label="Закрыть"
            whileHover={{ scale: 1.08, rotate: 3, opacity: 0.9 }}
            whileTap={{ scale: 0.92, rotate: -3, opacity: 0.8 }}
            transition={{ type: "spring", stiffness: 350, damping: 18 }}
          >
            <Image
              className="cursor-pointer"
              src="/icons/ui/closeBurger.svg"
              alt="Закрыть меню"
              width={35}
              height={35}
              draggable={false}
              priority
            />
          </motion.button>
        </div>
        <ul className="rounded-12 mt-24 flex w-fit items-center gap-10 bg-white/10 p-4 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] lg:hidden">
          {socialLinks.map(({ href, src, alt }) => (
            <li key={href} className="h-40 w-40">
              <Link
                href={href}
                aria-label={alt}
                className="rounded-12 flex h-full w-full items-center justify-center bg-white/10 transition-all active:scale-95"
              >
                <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
              </Link>
            </li>
          ))}
        </ul>
        <Button className="xs:hidden py-10 mt-24 block w-full" variant="light">
          Записаться
        </Button>
      </PopoverContent>
    </Popover>
  );
}
