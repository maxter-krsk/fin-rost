import CircleElement from "@/app/components/ui/CircleElement";
import styles from "@/app/styles/modules/noise.module.css";

const carouselItems: {
  number: string;
  title: string;
  description: string;
}[] = [
  {
    number: "01",
    title: "Деньги уходят —<br /> маржа тает",
    description: "Доходы растут, а внизу всё равно «ноль»",
  },
  {
    number: "02",
    title: "Цифр много —<br /> ясности мало",
    description: "Отчёты ради отчётов. Бизнес не ускоряется",
  },
  {
    number: "03",
    title: "Дышим кассовыми<br /> разрывами",
    description: "Платим в минус, сорваны сроки и скидки",
  },
  {
    number: "04",
    title: "Банки и инвесторы<br /> разворачивают",
    description: "Нет чёткой финмодели и прогнозов",
  },
  {
    number: "05",
    title: "Никто не отвечает<br /> за финрезультат",
    description: "CFO нет, функции «размазаны» между всеми",
  },
  {
    number: "06",
    title: "Хаос вместо<br /> регламентов",
    description: "Бюджеты не утверждены, порядок не выстроен",
  },
];

export function BarrierCards() {
  return (
    <div className="xs:grid hidden grid-cols-1 gap-10 xs:grid-cols-2 lg:grid-cols-3">
      {carouselItems.map((item) => (
        <div
          key={item.number}
          className="rounded-10 bg-darkBlue relative flex h-full flex-col gap-52 overflow-hidden border border-white/30 p-20"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className={styles.noise} />

          <CircleElement className="relative ml-auto w-[3.5rem] h-[3.5rem]">
            <span className="font-bounded text-16 font-extralight">{item.number}</span>
          </CircleElement>

          <div className="relative flex flex-col gap-10">
            <h2
              className="font-bounded md:text-18 lg:text-20 font-normal"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />
            <p className="font-onest text-16 lg:text-18 font-extralight">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

