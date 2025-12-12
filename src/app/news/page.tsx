"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Separator } from "@/lib/ui/separator";
import { NewsCard } from "@/app/components/ui/NewsCard";
import { Button } from "@/lib/ui/button";

const newsList = [
  {
    image: "/images/news/13-10-2025.jpg",
    alt: "Красноярские делороссы выступили экспертами на бизнес-интенсиве Росмолодежи",
    title: "Красноярские делороссы выступили экспертами на бизнес-интенсиве Росмолодежи",
    description:
      "На «Бизнес-мастерской 2025» в Красноярске эксперт Ольга Кирьянова  рекомендовала предпринимателям разделять личные и бизнес-средства. Она  отметила важность таких мероприятий для поддержки стартапов.",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/krasnoyarskie-delorossy-vystupili-ekspertami-na-biznes-intensive-rosmolodezhi/",
    date: "13.10.2025",
  },
  {
    image: "/images/news/09-10-2025.jpg",
    alt: "Бизнес-разборы на форуме Росмолодёжи",
    title: "Бизнес-разборы на форуме Росмолодёжи",
    description:
      "Задача организации, в особенности же высококачественный прототип будущего проекта требует анализа поэтапного и последовательного развития общества.",
    link: "https://vk.com/wall-211226583_2488",
    date: "09.10.2025",
  },
  {
    image: "/images/news/24-02-2025.jpg",
    alt: "Интенсив по наставничеству для молодых предпринимателей",
    title: "Интенсив по наставничеству для молодых предпринимателей",
    description:
      "Участники получили советы от экспертов, Ав том числе от Ольги Кирьяновой, о финансах и построении устойчивого бизнеса.",
    link: "https://vk.com/wall-229440509_15",
    date: "24.02.2025",
  },
  {
    image: "/images/news/10-02-2025.jpg",
    alt: "Финансовая грамотность на интенсиве «Деловой России»",
    title: "Финансовая грамотность на интенсиве «Деловой России»",
    description:
      "Ольга Кирьянова выступила с темой разделения финансов компании и владельца, подчеркнув важность контроля над потоками.",
    link: "https://vk.com/wall-211226583_2128",
    date: "10.02.2025",
  },
  {
    image: "/images/news/24-10-2024.jpg",
    alt: "Открытие офиса Ассоциации «Платинум» в Красноярске",
    title: "Открытие офиса Ассоциации «Платинум» в Красноярске",
    description:
      "Ольга Кирьянова вошла в состав Ассоциации бухгалтеров-аутсорсеров и поддержала развитие экспертного сообщества в регионе.",
    link: "https://vk.com/wall-211226583_2004",
    date: "24.10.2024",
  },
  {
    image: "/images/news/08-10-2024.jpg",
    alt: "Выступление на конференции TAXI-2024 в Сочи",
    title: "Выступление на конференции TAXI-2024 в Сочи",
    description:
      "Ольга Кирьянова осветила важность финансовой отчётности и грамотного аутсорсинга в налоговом планировании.",
    link: "https://vk.com/wall-211226583_1964",
    date: "08.10.2024",
  },
  {
    image: "/images/news/06-06-2024.jpg",
    alt: "Мастер-класс Ольги Кирьяновой на форуме «Мой бизнес»",
    title: "Мастер-класс Ольги Кирьяновой на форуме «Мой бизнес»",
    description:
      "Ольга рассказала, как разделять личные и бизнес-финансы для стабильного роста компании.",
    link: "https://vk.com/wall-211226583_1786",
    date: "06.06.2024",
  },
  {
    image: "/images/news/24-05-2024.jpg",
    alt: "«Деловая Россия» организовала площадку на форуме «Мой бизнес»",
    title: "«Деловая Россия» организовала площадку на форуме «Мой бизнес»",
    description:
      "Эксперт Ольга Кирьянова провела на форуме мастер-класс по  разделению финансов компании и личных средств. Это помогает бизнесу  избежать убытков.",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/krasnoyarskaya-delovaya-rossiya-vystupila-organizatorom-ploshchadok-na-forume-moy-biznes-dni-predpri/",
    date: "24.05.2024",
  },
  {
    image: "/images/news/09-04-2024.jpg",
    alt: "Совещание по инвестиционному потенциалу края",
    title: "Совещание по инвестиционному потенциалу края",
    description:
      "Ольга Кирьянова обсудила меры поддержки МСП и развитие кадрового и инвестиционного потенциала региона.",
    link: "https://vk.com/wall-211226583_1687",
    date: "09.04.2024",
  },
  {
    image: "/images/news/18-08-2023.jpg",
    alt: "Красноярские делороссы на Минусинском инвестиционном форуме",
    title: "Красноярские делороссы на Минусинском инвестиционном форуме",
    description:
      "На форуме делороссы участвовали в мозговых штурмах. Ольга  Кирьянова отметила, что такой формат помогает предпринимателям быстро  находить решения задач.",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/krasnoyarskie-delorossy-prinyali-aktivnoe-uchastie-v-rabote-vi-minusinskogo-investitsionnogo-foruma/",
    date: "18.08.2023",
  },
  {
    image: "/images/news/20-06-2023.jpg",
    alt: "Молодёжная палата при «Деловой России»",
    title: "Молодёжная палата при «Деловой России»",
    description:
      "При красноярском отделении «Деловой России» создана Молодёжная палата. Кураторами назначены Ольга Кирьянова и директор по развитию организации.",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/pri-krasnoyarskom-otdelenii-delovoy-rossii-sozdana-molodezhnaya-palata/",
    date: "20.06.2023",
  },
  {
    image: "/images/news/09-12-2022.jpg",
    alt: "Делороссы — на форуме о президентской программе",
    title: "Делороссы — на форуме о президентской программе",
    description:
      "На форуме в Красноярске, посвящённом 25-летию  президентской программы, с докладом выступила Ольга Кирьянова,  руководитель комитета по инвестициям «Деловой России».",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/delorossy-vystupili-na-ploshchadke-foruma-posvyashchennogo-25-letiyu-prezidentskoy-programmy-krasnoya/",
    date: "09.12.2022",
  },
  {
    image: "/images/news/07-12-2022.jpg",
    alt: "В Красноярске вручены премии лидерам бизнеса",
    title: "В Красноярске вручены премии лидерам бизнеса",
    description:
      "Основательница компании «Финансовый Рост» Ольга Кирьянова вошла в число гостей красноярской бизнес-премии «Персона года».",
    link: "https://deloros.ru/press-centr/novosti/novosti-regionov/krasnoyarskiy-kray/v-krasnoyarske-vrucheny-premii-lideram-biznesa/",
    date: "07.12.2022",
  },
];
export default function News() {
  const [showMore, setShowMore] = useState(false);

  const handleShowMoreClick = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section className="desk:mb-120 mt-120 mb-50">
      <div className="container">
        <h1 className="font-bounded text-30 md:text-36 lg:text-60 xs:mb-36 mb-20 font-bold lg:mb-50">
          Новости об Ольге Кирьяновой
        </h1>
        <Separator className="xs:mb-36 mb-20 lg:mb-50" gradientDirection="center" />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          layout
          className="xs:grid-cols-[repeat(2,minmax(14rem,1fr))] grid grid-cols-[repeat(1,minmax(14rem,1fr))] gap-10 lg:grid-cols-[repeat(3,minmax(16rem,1fr))] lg:gap-20"
        >
          <AnimatePresence>
            {newsList.map((item, i) =>
              showMore || i < 6 ? (
                <motion.div
                  key={`${item.title}-${item.date}`}
                  layout="position"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <NewsCard {...item} />
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </motion.div>
        <div className="text-center">
          <Button
            className="xs:mt-36 mt-12 lg:mt-50"
            variant="orange"
            onClick={handleShowMoreClick}
          >
            {showMore ? "Свернуть" : "Все новости"}
          </Button>
        </div>
      </div>
    </section>
  );
}
