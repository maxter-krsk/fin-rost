"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/lib/ui/button";
import styles from "@/app/styles/modules/noise.module.css";

const cardItemsFront = [
  {
    title: "Консультация собственника",
    time: "60 минут",
    cost: "15 000 ₽",
    question: "Что входит?",
  },
  {
    title: "Сопровождение управленческого учёта",
    time: "В месяц",
    cost: "от 39 999 ₽",
    question: "Что входит?",
  },
  {
    title: "Финансовая модель",
    cost: "от 47 999 ₽",
    question: "Что входит?",
  },
  {
    title: "CFO на аутсорсе",
    cost: "от 89 999 ₽",
    question: "Что входит?",
  },
  {
    title: "Бизнес‑план",
    cost: "от 309 999 ₽",
    question: "Что входит?",
  },
  {
    title: "Аудит учёта и отчётности",
    cost: "от 49 999 ₽",
    question: "Что входит?",
  },
  {
    title: "Регламентация финблока",
    cost: "от 59 999 ₽",
    question: "Что входит?",
  },
];

const cardItemsBack: {
  title: string;
  description: string[];
  time?: string;
  cost: string;
}[] = [
  {
    title: "Консультация собственника",
    description: [
      "Разбор 1‑2 запросов",
      "Быстрые рекомендации по шагам",
      "Результат: понимание приоритетов и цифр",
    ],
    time: "60 минут",
    cost: "15 000 ₽",
  },
  {
    title: "Сопровождение управленческого учёта",
    description: [
      "Баланс, P&L, ДДС и свод KPI",
      "Презентация итогов раз в месяц",
      "Результат: прозрачность и управляемость",
    ],
    time: "В месяц",
    cost: "от 39 999 ₽",
  },
  {
    title: "Финансовая модель",
    description: [
      "Еxcel‑модель под ваш бизнес: выручка, маржинальность, сценарии, окупаемость",
      "Результат: решения на цифрах",
    ],
    cost: "от 47 999 ₽",
  },
  {
    title: "CFO на аутсорсе",
    description: [
      "Стратегия",
      "Еженедельное финпланирование",
      "Контроль отчётности",
      "Работа с банками/инвесторами",
      "Результат: стабильность",
    ],
    cost: "от 89 999 ₽",
  },
  {
    title: "Бизнес‑план",
    description: [
      "Документ для инвесторов/субсидий",
      "Риски",
      "Экономика",
      "Roadmap",
      "Результат: финансирование и рост",
    ],
    cost: "от 309 999 ₽",
  },
  {
    title: "Аудит учёта и отчётности",
    description: [
      "Проверка управленческого/бухгалтерского учёта",
      "Отчёт с выводами и рекомендациями",
      "Результат: корректный учёт",
    ],
    cost: "от 49 999 ₽",
  },
  {
    title: "Регламентация финблока",
    description: [
      "Положения",
      "Инструкции",
      "Регламенты бюджетирования/казначейства",
      "Результат: устойчивые процессы",
    ],
    cost: "от 59 999 ₽",
  },
];

export function PriceCards() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <>
      <motion.div className="hidden gap-10 md:grid md:grid-cols-3 cursor-pointer">
        <AnimatePresence>
          {cardItemsFront.map((item, i) =>
            showMore || i < 6 ? (
              <motion.div
                key={i}
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="rounded-10 bg-darkBlue relative flex flex-col overflow-hidden p-30"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                <div className={styles.noise} />

                <div className="relative flex flex-1 flex-col">
                  <h2 className="text-16 lg:text-18 font-bounded font-normal">{item.title}</h2>
                  <div className="mt-auto flex flex-col items-start justify-between gap-10 pt-[12.125rem] lg:flex-row lg:items-end">
                    <p className="text-14 lg:text-16 font-onest text-mouse order-2 font-extralight underline lg:order-none">
                      {item.question}
                    </p>

                    <div className="order-1 flex flex-col items-start gap-10 lg:order-none lg:items-end">
                      <p className="text-16 lg:text-18 font-bounded font-extralight">{item.cost}</p>

                      {item.time && (
                        <span className="text-14 lg:text-16 font-onest text-mouse font-extralight">
                          {item.time}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>
      <div className="text-center">
        <Button
          className="xs:mt-36 mt-12 mb-70 md:mb-90 lg:mt-50 lg:mb-50"
          variant="orange"
          onClick={handleShowMoreClick}
        >
          {showMore ? "Свернуть" : "Все новости"}
        </Button>
      </div>
    </>
  );
}
