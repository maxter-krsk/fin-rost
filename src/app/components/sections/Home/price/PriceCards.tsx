"use client";

import {
  FlipButton,
  FlipButtonBack,
  FlipButtonFront,
} from "@/components/animate-ui/primitives/buttons/flip";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/lib/ui/button";
import styles from "@/app/styles/modules/noise.module.css";

type CardItem = {
  title: string;
  front: {
    time?: string;
    cost: string;
    question: string;
  };
  back: {
    description: string[];
    time?: string;
    cost: string;
  };
};

const cardItems: CardItem[] = [
  {
    title: "Консультация собственника",
    front: {
      time: "60 минут",
      cost: "15 000 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Разбор 1-2 запросов",
        "Быстрые рекомендации по шагам",
        "Результат: понимание приоритетов и цифр",
      ],
      time: "60 минут",
      cost: "15 000 ₽",
    },
  },
  {
    title: "Сопровождение управленческого учёта",
    front: {
      time: "В месяц",
      cost: "от 39 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Баланс, P&L, ДДС и свод KPI",
        "Презентация итогов раз в месяц",
        "Результат: прозрачность и управляемость",
      ],
      time: "В месяц",
      cost: "от 39 999 ₽",
    },
  },
  {
    title: "Финансовая модель",
    front: {
      cost: "от 47 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Еxcel-модель под ваш бизнес: выручка, маржинальность, сценарии, окупаемость",
        "Результат: решения на цифрах",
      ],
      cost: "от 47 999 ₽",
    },
  },
  {
    title: "CFO на аутсорсе",
    front: {
      cost: "от 89 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Стратегия",
        "Еженедельное финпланирование",
        "Контроль отчётности",
        "Работа с банками/инвесторами",
        "Результат: стабильность",
      ],
      cost: "от 89 999 ₽",
    },
  },
  {
    title: "Бизнес-план",
    front: {
      cost: "от 309 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Документ для инвесторов/субсидий",
        "Риски",
        "Экономика",
        "Roadmap",
        "Результат: финансирование и рост",
      ],
      cost: "от 309 999 ₽",
    },
  },
  {
    title: "Аудит учёта и отчётности",
    front: {
      cost: "от 49 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Проверка управленческого/бухгалтерского учёта",
        "Отчёт с выводами и рекомендациями",
        "Результат: корректный учёт",
      ],
      cost: "от 49 999 ₽",
    },
  },
  {
    title: "Регламентация финблока",
    front: {
      cost: "от 59 999 ₽",
      question: "Что входит?",
    },
    back: {
      description: [
        "Положения",
        "Инструкции",
        "Регламенты бюджетирования/казначейства",
        "Результат: устойчивые процессы",
      ],
      cost: "от 59 999 ₽",
    },
  },
];

export function PriceCards() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  const cardBaseClasses =
    "rounded-10 bg-darkBlue relative flex flex-col text-start overflow-hidden w-full h-full p-20 lg:p-30";

  return (
    <>
      <motion.div className="hidden lg:grid md:grid-cols-3 gap-10 cursor-pointer">
        <AnimatePresence>
          {cardItems.map((item, i) =>
            showMore || i < 6 ? (
              <motion.div
                key={item.title}
                layout="position"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="h-full w-full"
              >
                <FlipButton className="w-full h-full">
                  <FlipButtonFront>
                    <div className={cardBaseClasses}>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                      <div className={styles.noise} />

                      <div className="relative flex flex-1 flex-col">
                        <h2 className="text-16 lg:text-18 font-bounded font-normal">
                          {item.title}
                        </h2>
                        <div className="mt-auto flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-end">
                          <p className="text-14 lg:text-16 font-onest text-mouse order-2 font-extralight underline lg:order-none">
                            {item.front.question}
                          </p>

                          <div className="order-1 flex flex-col items-start gap-10 lg:order-none lg:items-end">
                            <p className="text-16 lg:text-18 font-bounded font-extralight">
                              {item.front.cost}
                            </p>

                            {item.front.time && (
                              <span className="text-14 lg:text-16 font-onest text-mouse font-extralight">
                                {item.front.time}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </FlipButtonFront>

                  <FlipButtonBack>
                    <div className={`${cardBaseClasses} gap-80 p-20`}>
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
                      <div className={styles.noise} />

                      <div className="relative flex flex-col gap-24">
                        <h2 className="text-16 xs:text-18 font-bounded font-normal">
                          {item.title}
                        </h2>
                        <ul className="text-16 xs:text-18 font-onest text-mouse flex flex-col gap-10 font-extralight">
                          {item.back.description.map((descItem, index) => (
                            <li className="flex items-center gap-16" key={index}>
                              <span className="bg-ocean text-ocean block h-[0.5rem] w-[0.5rem] shrink-0 rounded-full" />
                              <p>{descItem}</p>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="relative mt-auto flex justify-between">
                        {item.back.time && (
                          <span className="text-14 xs:text-16 font-onest text-mouse font-extralight">
                            {item.back.time}
                          </span>
                        )}
                        <p className="text-16 xs:text-18 font-bounded font-extralight">
                          {item.back.cost}
                        </p>
                      </div>
                    </div>
                  </FlipButtonBack>
                </FlipButton>
              </motion.div>
            ) : null
          )}
        </AnimatePresence>
      </motion.div>

      <div className="hidden lg:block text-center">
        <Button
          className="xs:mt-36 mt-12 lg:mt-50"
          variant="orange"
          onClick={handleShowMoreClick}
        >
          {showMore ? "Свернуть" : "Все услуги"}
        </Button>
      </div>
    </>
  );
}
