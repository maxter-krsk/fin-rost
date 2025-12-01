"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/lib/ui/button";
import { Burger } from "./Burger";
import { PopoverForm } from "@/app/components/sections/Home/form/PopoverForm";

const socialLinks = [
  { src: "/icons/ui/socials/wa-icon-light.svg", alt: "WhatsApp", href: "#WhatsApp" },
  { src: "/icons/ui/socials/phone-icon-light.svg", alt: "Телефон", href: "#Phone" },
  { src: "/icons/ui/socials/youtube-icon-light.svg", alt: "YouTube", href: "#YouTube" },
  { src: "/icons/ui/socials/tg-icon-light.svg", alt: "Telegram", href: "#Telegram" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    const onChangeEvent = (e: MediaQueryListEvent) => setMatches(e.matches);
    const onChangeList = (e: MediaQueryList) => setMatches(e.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", onChangeEvent);
      return () => mql.removeEventListener("change", onChangeEvent);
    } else {
      // @ts-expect-error: старые типы MediaQueryList
      mql.addListener(onChangeList);
      // @ts-expect-error: старые типы MediaQueryList
      return () => mql.removeListener(onChangeList);
    }
  }, [query]);

  return matches;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const burgerBtnRef = useRef<HTMLButtonElement>(null);
  const isBelowXs = useMediaQuery("(max-width: 575.98px)");

  const [isInDarkZone, setIsInDarkZone] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>("footer, [data-dark-header]");
    if (!targets.length) return;

    // тут храним все элементы, которые сейчас видны
    const visible = new Set<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });

        setIsInDarkZone(visible.size > 0);
      },
      {
        root: null,
        threshold: 0, // можно потом подрегулировать
        // для начала убери rootMargin, чтобы убедиться что работает
        rootMargin: "0px 0px -500px 0px",
      }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={clsx("isolation-isolate fixed inset-x-0 top-0 left-0 z-40 w-full py-20")}>
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 rounded-b-3xl transition-all duration-300 ease-out",
          isInDarkZone
            ? "bg-midnight/80 shadow-md backdrop-blur-xl"
            : isScrolled
              ? "bg-white/10 opacity-100 shadow-md backdrop-blur-xl"
              : "opacity-0"
        )}
      />
      <div className="container">
        <div className="flex items-center">
          <div className="xs:w-auto xs:justify-start xs:items-center xs:gap-30 flex w-full justify-between">
            <Link href="/">
              <Image
                src="/icons/logos/logo-light.svg"
                alt="Светлый логотип"
                width={68}
                height={49}
                className="h-40 w-52 lg:h-48 lg:w-68"
              />
            </Link>

            <Burger
              triggerRef={isBelowXs ? burgerBtnRef : undefined}
              formOpen={formOpen}
              onOpenForm={() => setFormOpen(true)}
              onCloseForm={() => setFormOpen(false)}
              isDarkZone={isInDarkZone}
            />
          </div>

          <div className="ml-auto flex gap-30">
            <ul className="rounded-12 hidden items-center gap-10 bg-white/10 p-4 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] backdrop-blur-md lg:flex">
              {socialLinks.map(({ href, src, alt }) => (
                <li key={href} className="h-40 w-40">
                  <Link
                    href={href}
                    aria-label={alt}
                    className="rounded-12 flex h-full w-full items-center justify-center bg-white/10 transition-all duration-300 active:scale-95"
                  >
                    <Image src={src} alt={alt} width={22} height={22} className="h-22 w-22" />
                  </Link>
                </li>
              ))}
            </ul>
            <PopoverForm
              anchorRef={isBelowXs ? burgerBtnRef : undefined}
              open={formOpen}
              onOpenChange={setFormOpen}
              isAtFooter={isInDarkZone}
              trigger={
                <Button className="xs:block hidden px-20 py-10 lg:px-20 lg:py-14" variant="light">
                  Записаться
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </header>
  );
}
