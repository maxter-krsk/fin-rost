"use client";

import { Title } from "@/app/components/ui/Title";

import { useState } from "react";
import Link from "next/link";
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
export function Form() {
  return (
    <section className="mb-120">
      <div className="container">
        <Title>Консультация</Title>
        <h1 className="font-bounded text-14 sm:text-18 lg:text-30 xs:text-left mb-24 text-center md:mb-20 lg:mb-50">
          Обсудим цели, найдём «узкие места» и предложим план действий
        </h1>
        <form className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-20" method="post">
          <Input
            className="text-slate bg-midnight text-14 xs:text-16 border-none px-30 py-16 font-normal"
            type="text"
            name="Имя"
            placeholder="Ваше имя"
            required
            minLength={2}
            maxLength={40}
            pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
            title="2–40 символов, только буквы, пробелы, дефис и апостроф"
          ></Input>
          <Select>
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
          <Textarea
            className="text-slate bg-midnight rounded-12 border-none px-30 py-16 font-normal"
            placeholder="Что вас интересует?"
          />
          <Input
            type="text"
            name="Имя"
            required
            minLength={2}
            maxLength={40}
            pattern="^(?=.{2,40}$)[A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+(?:[ '\-’][A-Za-zÀ-ÖØ-öø-ÿА-Яа-яЁё]+)*$"
            title="2–40 символов, только буквы, пробелы, дефис и апостроф"
            className="text-slate bg-midnight rounded-12 border-none px-30 py-16 font-normal"
            placeholder="@ttttt"
          />
          <div className="my-14 flex gap-16 md:my-0 lg:gap-20">
            <Checkbox id="privacy-policy" />
            <Label className="flex cursor-pointer flex-col items-start" htmlFor="privacy-policy">
              «Я согласен(а) на обработку персональных данных и принимаю
              <Link className="underline" href="/privacy-policy">
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
