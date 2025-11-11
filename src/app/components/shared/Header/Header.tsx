"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Button } from "@/lib/ui/button";
import { Burger } from "./Burger";
import { PopoverForm } from "@/app/components/sections/Home/form/PopoverForm";

const socialLinks = [
  { src: "/icons/ui/socials/wa-icon-light.svg", alt: "WhatsApp", href: "#" },
  { src: "/icons/ui/socials/phone-icon-light.svg", alt: "Телефон", href: "#" },
  { src: "/icons/ui/socials/youtube-icon-light.svg", alt: "YouTube", href: "#" },
  { src: "/icons/ui/socials/tg-icon-light.svg", alt: "Telegram", href: "#" },
];

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent | MediaQueryList) =>
      setMatches("matches" in e ? e.matches : (e as MediaQueryList).matches);
    onChange(mql);
    mql.addEventListener?.("change", onChange as any);
    return () => mql.removeEventListener?.("change", onChange as any);
  }, [query]);
  return matches;
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const burgerBtnRef = useRef<HTMLButtonElement>(null);
  const isBelowXs = useMediaQuery("(max-width: 575.98px)");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 70);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={clsx("isolation-isolate fixed inset-x-0 top-0 left-0 z-40 w-full py-20")}>
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 -z-10 rounded-b-3xl",
          "bg-white/10 backdrop-blur-xl",
          "transition-opacity duration-300 ease-out",
          isScrolled ? "opacity-100 shadow-md" : "opacity-0 shadow-none"
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
            />
          </div>

          <div className="ml-auto flex gap-30">
            <ul className="rounded-12 hidden items-center gap-10 bg-white/10 p-4 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] backdrop-blur-md lg:flex">
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
            <PopoverForm
              anchorRef={isBelowXs ? burgerBtnRef : undefined}
              open={formOpen}
              onOpenChange={setFormOpen}
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
