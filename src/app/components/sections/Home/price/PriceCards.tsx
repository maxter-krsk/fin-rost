"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

  return (
    <>
      <div className="hidden gap-10 lg:grid lg:grid-cols-3">
        {cardItems.map((item, i) =>
          showMore || i < 6 ? <FlipCard key={item.title} item={item} /> : null
        )}
      </div>

      <div className="hidden text-center lg:block">
        <Button className="xs:mt-36 mt-12 lg:mt-50" variant="orange" onClick={handleShowMoreClick}>
          {showMore ? "Свернуть" : "Все услуги"}
        </Button>
      </div>
    </>
  );
}

function FlipCard({ item }: { item: CardItem }) {
  const [flipped, setFlipped] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
  }, []);

  const handleClick = () => {
    if (!isTouch) return;
    setFlipped((prev) => !prev);
  };

  return (
    <motion.div
      className="desk:h-[19rem] h-[25rem] w-full cursor-pointer"
      style={{ perspective: 2000 }}
      onClick={handleClick}
      initial={false}
      animate={flipped ? "back" : "front"}
      whileHover={isTouch ? undefined : "back"}
    >
      <motion.div
        className="relative h-full w-full"
        variants={{
          front: { rotateY: 0 },
          back: { rotateY: 180 },
        }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* FRONT */}
        <div
          className="rounded-12 bg-darkBlue absolute inset-0 flex h-full w-full flex-col overflow-hidden p-30"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="rounded-12 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="rounded-12 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className={`${styles.noise} rounded-12 pointer-events-none`} />

          <h3 className="font-bounded text-20 font-normal">{item.title}</h3>

          <div className="mt-auto flex items-end justify-between">
            <p className="text-18 text-mouse mr-10 font-light underline">{item.front.question}</p>
            <div className="flex flex-col text-right">
              <span className="desk:text-20 text-18 font-bounded font-light">
                {item.front.cost}
              </span>
              {item.front.time && <span className="text-16 font-light">{item.front.time}</span>}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="rounded-12 bg-darkBlue absolute inset-0 flex h-full w-full flex-col overflow-hidden p-30"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="rounded-12 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="rounded-12 pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className={`${styles.noise} rounded-12 pointer-events-none`} />

          <div className="desk:flex-row flex flex-col justify-between">
            <div className="basis-1/2">
              <h3 className="font-bounded text-20 desk:mb-0 mb-20 font-normal">{item.title}</h3>
            </div>
            <div className="desk:items-end flex flex-col items-start">
              <span className="font-bounded text-light text-20">{item.back.cost}</span>
              {item.back.time && <span className="text-mouse">{item.back.time}</span>}
            </div>
          </div>

          <ul className="mt-auto">
            {item.back.description.map((desc, idx) => (
              <li key={idx} className="text-18 text-mouse flex items-center gap-16 font-light">
                <span className="h-6 w-6 shrink-0 rounded-full border border-blue-500 bg-blue-500" />
                {desc}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}
