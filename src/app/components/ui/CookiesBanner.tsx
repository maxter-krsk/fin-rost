"use client";

import Link from "next/link";
import { Button } from "@/lib/ui/button";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CONSENT_COOKIE = "cookie-consent=true";
const COOKIE_MAX_AGE_DAYS = 6;

export default function CookiesBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasConsent = document.cookie.includes("cookie-consent=");
    if (!hasConsent) setVisible(true);
  }, []);

  const accept = () => {
    const expires = new Date();
    expires.setDate(expires.getDate() + COOKIE_MAX_AGE_DAYS);
    document.cookie = `${CONSENT_COOKIE}; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="cookie-banner"
          initial={{ y: "110%", x: 0 }}
          animate={{ y: 0, x: 0 }}
          exit={{ y: "110%", transition: { duration: 0.4, ease: "easeInOut" } }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          style={{ willChange: "transform" }}
          className="fixed inset-x-16 bottom-6 p-2 md:right-auto md:left-1/2 md:mx-auto md:w-[calc(100%-2rem)] md:max-w-4xl md:-translate-x-1/2"
        >
          <div className="rounded-12 bg-white/10 backdrop-blur-md">
            <div className="flex flex-col gap-24 p-20 lg:flex-row lg:gap-60 lg:p-30">
              <p className="text-14 xs:text-16 lg:text-18 text-center leading-relaxed font-light">
                Продолжая просмотр сайта, вы соглашаетесь с использованием cookie в соответствии с
                нашей{" "}
                <Link href="/cookie-policy" className="font-medium underline">
                  Политикой в отношении обработки cookie-файлов
                </Link>
              </p>
              <div className="flex justify-center">
                <Button onClick={accept} variant="orange" className="">
                  ОК
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
