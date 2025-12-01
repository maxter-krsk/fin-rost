"use client";

import { Title } from "@/app/components/ui/Title";

import Link from "next/link";
import { useState } from "react";
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
import { sendContact } from "@/app/actions/sendContact";
// import { useSuccessPopup } from "@/app/providers/SuccessPopupProvider";

type Channel = "Telegram" | "WhatsApp" | "Телефон" | "";
export function Form() {
  const [pending, setPending] = useState(false);
  const [channel, setChannel] = useState<Channel>("");
  const [telegram, setTelegram] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [phone, setPhone] = useState("");

  const effectiveChannel: Exclude<Channel, ""> = channel || "Телефон";

  const phoneRef = useMask({
    mask: "+7 999 999-99-99",
    replacement: { 9: /\d/ },
  });

  const handleChannelChange = (v: Channel) => {
    setChannel(v);
    setTelegram("");
    setWhatsapp("");
    setPhone("");
    if ((phoneRef as React.RefObject<HTMLInputElement>).current) {
      (phoneRef as React.RefObject<HTMLInputElement>).current!.value = "";
    }
  };

  const tgPattern = /^@?[a-zA-Z0-9_]{5,32}$/;
  const phonePattern = /^\+?\d[\d\s()-]{6,}$/;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    try {
      const form = e.currentTarget;
      const fd = new FormData(form);
      fd.set("source", "Форма из блока Консультация");
      const res = await sendContact(fd);
      if (res?.ok) {
        form.reset();
        setChannel("");
        setTelegram("");
        setWhatsapp("");
        setPhone("");
        alert("Заявка успешно отправлена");
      } else {
        alert(res?.error ?? "Заявка не отправилась. Повторите попытку.");
      }
    } finally {
      setPending(false);
    }
  };

  return (
    <section id="form" className="xs:mb-70 xs:scroll-mt-120 mb-50 scroll-mt-100 md:mb-90 lg:mb-120">
      <div className="container">
        <Title>Консультация</Title>
        <h1 className="font-bounded text-14 sm:text-18 lg:text-30 xs:text-left mb-24 text-center md:mb-20 lg:mb-50">
          Обсудим цели, найдём «узкие места» и предложим план действий
        </h1>
        <form
          onSubmit={onSubmit}
          className="grid items-start gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20"
          method="post"
        >
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
          <Select value={channel} onValueChange={handleChannelChange}>
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

          {effectiveChannel === "Telegram" && (
            <Input
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

          {effectiveChannel === "WhatsApp" && (
            <Input
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

          {effectiveChannel === "Телефон" && (
            <Input
              key="ph"
              ref={phoneRef}
              type="tel"
              inputMode="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              pattern={phonePattern.source}
              placeholder="Номер телефона"
              title="Формат: +7 999 999-99-99"
            />
          )}

          {/* скрытое поле: удобный способ связи */}
          <input type="hidden" name="preferred" value={effectiveChannel} />

          <Textarea
            className="text-slate bg-midnight rounded-12 border-none px-30 py-16 font-normal"
            name="message"
            placeholder="Что вас интересует?"
          />

          <div className="my-14 flex items-start gap-16 md:my-0 lg:gap-20">
            <Checkbox required className="shrink-0 cursor-pointer" id="privacy-policy" />
            <Label className="block cursor-pointer items-start" htmlFor="privacy-policy">
              «Я согласен(а) на обработку персональных данных и принимаю{" "}
              <Link className="inline underline" href="/privacy-policy">
                Политику конфиденциальности»
              </Link>
            </Label>
          </div>
          <Button type="submit" disabled={pending} variant="orange">
            {pending ? "Отправляем..." : "Отправить"}
          </Button>
        </form>
      </div>
    </section>
  );
}
