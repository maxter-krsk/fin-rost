"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { useMask } from "@react-input/mask";
import { motion } from "framer-motion";

import { Button } from "@/lib/ui/button";
import { Input } from "@/lib/ui/input";
import { Textarea } from "@/lib/ui/textarea";
import { Checkbox } from "@/lib/ui/checkbox";
import { Label } from "@/lib/ui/label";
import { Popover, PopoverTrigger, PopoverContent } from "@/lib/ui/popover";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import clsx from "clsx";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { sendContact } from "@/app/actions/sendContact";

type Channel = "Telegram" | "WhatsApp" | "Телефон" | "";

type Props = {
  open?: boolean;
  onOpenChange?: (v: boolean) => void;
  trigger?: React.ReactNode;
  isAtFooter?: boolean;
  isScrolled?: boolean;
  anchorRef?: React.RefObject<HTMLElement> | React.MutableRefObject<HTMLElement | null>;
};

export function PopoverForm({
  open,
  onOpenChange,
  trigger,
  anchorRef,
  isAtFooter,
  isScrolled,
}: Props) {
  const [pending, setPending] = useState(false);
  const [channel, setChannel] = useState<Channel>("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phone, setPhone] = useState("");

  const phoneRef = useMask({
    mask: "+7 999 999-99-99",
    replacement: { 9: /\d/ },
  }) as React.RefObject<HTMLInputElement>;

  const handleChannelChange = (v: Channel) => {
    setChannel(v);
    setTelegram("");
    setWhatsapp("");
    setPhone("");
    if (phoneRef.current) phoneRef.current.value = "";
  };

  const tgPattern = /^@?[a-zA-Z0-9_]{5,32}$/;
  const phonePattern = /^\+?\d[\d\s()-]{6,}$/;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.set("source", "Форма: Поповер «Консультация»");
      const res = await sendContact(fd);
      if (res?.ok) {
        form.reset();
        setChannel("");
        setTelegram("");
        setWhatsapp("");
        setPhone("");
        onOpenChange?.(false);
        alert("Заявка успешно отправлена! Мы свяжемся с Вами в ближайшее время.");
      } else {
        alert(res?.error ?? "Заявка не отправилась. Повторите попытку.");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <Popover modal open={open} onOpenChange={onOpenChange}>
      {anchorRef ? (
        <PopoverPrimitive.Anchor
          virtualRef={{ current: anchorRef.current ?? undefined } as React.RefObject<Element>}
        />
      ) : null}

      {trigger ? <PopoverTrigger asChild>{trigger}</PopoverTrigger> : null}

      <PopoverContent
        side="bottom"
        align="center"
        sideOffset={12}
        collisionPadding={16}
        className={clsx(
          "rounded-16 text-slate w-[min(29.375rem,calc(100vw-2rem))] overflow-y-auto p-20 shadow-xl",
          isScrolled && "mt-16",
          "[box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.35)] backdrop-blur-md",
          "sm:mr-8 md:mr-16",
          isAtFooter
            ? "bg-midnight/90 border border-white/30 text-white"
            : "text-slate border border-white/15 bg-white/10"
        )}
      >
        <motion.button
          className="xs:block mb-20 ml-auto hidden"
          onClick={() => onOpenChange?.(false)}
          aria-label="Закрыть"
          whileHover={{ scale: 1.08, rotate: 3, opacity: 0.9 }}
          whileTap={{ scale: 0.92, rotate: -3, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 350, damping: 18 }}
        >
          <Image
            className="h-34 w-34 cursor-pointer"
            src="/icons/ui/closeBurger.svg"
            alt="Закрыть форму"
            width={35}
            height={35}
            draggable={false}
            priority
          />
        </motion.button>

        <form onSubmit={onSubmit} className="space-y-6">
          <Input
            className="placeholder:text-lightSlate text-lightSlate bg-white/40"
            type="text"
            name="Имя"
            placeholder="Ваше имя"
            required
            minLength={2}
            maxLength={40}
            pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
            title="2–40 символов, только буквы, пробелы, дефис и апостроф"
          />

          <Select value={channel} onValueChange={handleChannelChange}>
            <SelectTrigger className="text-lightSlate rounded-12 w-full cursor-pointer border border-white/15 bg-white/40 px-30 py-16 font-normal">
              <SelectValue placeholder="Способ связи" />
            </SelectTrigger>
            <SelectContent className="border-white/15 bg-white/30 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)] backdrop-blur-md">
              <SelectGroup>
                <SelectItem value="Telegram">Telegram</SelectItem>
                <SelectItem value="WhatsApp">WhatsApp</SelectItem>
                <SelectItem value="Телефон">Телефон</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {(channel || "Телефон") === "Telegram" && (
            <Input
              className="placeholder:text-lightSlate text-lightSlate bg-white/40"
              key="tg"
              type="text"
              name="telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              required
              pattern={tgPattern.source}
              placeholder="@username"
              title="От 5 до 32 символов: буквы, цифры, подчёркивание. Можно начинать с @"
            />
          )}

          {(channel || "Телефон") === "WhatsApp" && (
            <Input
              className="placeholder:text-lightSlate text-lightSlate bg-white/40"
              key="wa"
              ref={phoneRef}
              type="tel"
              inputMode="tel"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required
              pattern={phonePattern.source}
              placeholder="Номер WhatsApp"
              title="Формат: +7 999 999-99-99"
            />
          )}

          {(channel || "Телефон") === "Телефон" && (
            <Input
              className="placeholder:text-lightSlate text-lightSlate bg-white/40"
              key="ph"
              type="tel"
              inputMode="tel"
              ref={phoneRef}
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern={phonePattern.source}
              placeholder="Номер телефона"
              title="Формат: +7 999 999-99-99"
            />
          )}

          <input type="hidden" name="preferred" value={channel || "Телефон"} />

          <Textarea
            className="placeholder:text-lightSlate text-lightSlate rounded-12 border border-white/15 bg-white/40 px-30 py-16 font-normal sm:col-span-2"
            name="message"
            placeholder="Что вас интересует?"
          />

          <div className="my-20 flex items-start gap-10 text-white sm:col-span-2">
            <Checkbox required className="shrink-0 cursor-pointer" id="privacy-policy-popup" />
            <Label
              htmlFor="privacy-policy-popup"
              className="text-12 sm:text-14 block cursor-pointer text-left leading-snug"
            >
              Нажимая кнопку, Вы даёте согласие с{" "}
              <Link className="underline" href="/privacy-policy">
                политикой конфиденциальности
              </Link>
              .
            </Label>
          </div>

          <div className="flex gap-10 sm:col-span-2">
            <Button type="submit" disabled={pending} variant="orange" className="flex-1 text-white">
              {pending ? "Отправляем..." : "Отправить"}
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
