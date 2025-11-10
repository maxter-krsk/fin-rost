"use client";

import { Title } from "@/app/components/ui/Title";

import Link from "next/link";
import { useState, useRef } from "react";
import { useMask } from "@react-input/mask";
import { Checkbox } from "@/lib/ui/checkbox";
import { Input } from "@/lib/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/lib/ui/select";
import { Textarea } from "@/lib/ui/textarea";
import { Label } from "@/lib/ui/label";
import { Button } from "@/lib/ui/button";
// import { sendContact } from "@/app/actions/sendContact";
// import { useSuccessPopup } from "@/app/providers/SuccessPopupProvider";

type Channel = "Telegram" | "WhatsApp" | "Телефон" | "";
export function Form() {
  const [channel, setChannel] = useState<Channel>("");
  const [telegram, setTelegram] = useState("");
  const [phone, setPhone] = useState("");

  const effectiveChannel: Exclude<Channel, ""> = channel || "Телефон";

  const phoneRef = useMask({
    mask: "+7 999 999-99-99",
    replacement: { 9: /\d/ },
  });

  const tgPattern = /^@?[a-zA-Z0-9_]{5,32}$/;
  const phonePattern = /^\+?\d[\d\s()-]{6,}$/;

  return (
    <section className="mb-120">
      <div className="container">
        <Title>Консультация</Title>
        <h1 className="font-bounded text-14 sm:text-18 lg:text-30 xs:text-left mb-24 text-center md:mb-20 lg:mb-50">
          Обсудим цели, найдём «узкие места» и предложим план действий
        </h1>
        <form className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20" method="post">
          <Input
            type="text"
            name="Имя"
            placeholder="Ваше имя"
            required
            minLength={2}
            maxLength={40}
            pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
            title="2–40 символов, только буквы, пробелы, дефис и апостроф"
          ></Input>
          <Select value={channel} onValueChange={(v: Channel) => setChannel(v)}>
            <SelectTrigger className="text-slate bg-midnight rounded-12 w-full cursor-pointer border-none px-30 py-16 font-normal">
              <SelectValue placeholder="Способ связи" />
            </SelectTrigger>
            <SelectContent className="bg-midnight border-slate">
              <SelectGroup>
                <SelectItem className="cursor-pointer" value="Telegram">
                  Telegram
                </SelectItem>
                <SelectItem className="cursor-pointer" value="WhatsApp">
                  WhatsApp
                </SelectItem>
                <SelectItem className="cursor-pointer" value="Телефон">
                  Телефон
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {effectiveChannel === "Telegram" ? (
            <Input
              type="text"
              name="telegram"
              value={telegram}
              onChange={(e) => setTelegram(e.target.value)}
              required
              pattern={tgPattern.source}
              title="От 5 до 32 символов: буквы, цифры, подчёркивание. Можно начинать с @"
              placeholder="@username"
            />
          ) : (
            <Input
              ref={phoneRef}
              type="tel"
              inputMode="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern={phonePattern.source}
              title="Формат: +7 999 999-99-99"
              className="text-slate bg-midnight rounded-12 border-none px-30 py-16 font-normal"
              placeholder={effectiveChannel === "WhatsApp" ? "Номер WhatsApp" : "Номер телефона"}
            />
          )}

          <Textarea
            className="text-slate bg-midnight rounded-12 border-none px-30 py-16 font-normal"
            placeholder="Что вас интересует?"
          />

          <div className="my-14 flex items-start gap-16 md:my-0 lg:gap-20">
            <Checkbox required className="shrink-0" id="privacy-policy" />
            <Label className="block cursor-pointer items-start" htmlFor="privacy-policy">
              «Я согласен(а) на обработку персональных данных и принимаю{" "}
              <Link className="inline underline" href="/privacy-policy">
                Политику конфиденциальности»
              </Link>
            </Label>
          </div>
          <Button type="submit" variant="orange">
            Отправить
          </Button>
        </form>
      </div>
    </section>
  );
}
