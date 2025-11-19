import Image from "next/image";

const cardsItems = [
  {
    title: "Постоянно развиваемся и повышаем квалификацию",
    image: "/icons/ui/features/qualification.svg",
    alt: "Иконка сертификата или документа, символизирующая постоянное развитие и повышение квалификации",
  },
  {
    title: "Работаем в ваши сроки, без отвлечений",
    image: "/icons/ui/features/deadlines.svg",
    alt: "Иконка календаря с галочкой, обозначающая соблюдение сроков и выполнение работ вовремя",
  },
  {
    title: "Полная защита данных",
    image: "/icons/ui/features/security.svg",
    alt: "Иконка портфеля с защитным щитом, гарантирующая полную защиту данных и конфиденциальность",
  },
  {
    title: "Приходим без затрат на обучение",
    image: "/icons/ui/features/education.svg",
    alt: "Иконки документов или инструкций, символизирующие отсутствие затрат на обучение с нашей стороны",
  },
  {
    title: "Работаем удалённо по РФ и СНГ",
    image: "/icons/ui/features/remote.svg",
    alt: "Иконки графика роста и метки геолокации, показывающие удаленную работу по РФ и СНГ",
  },
];

export function ResultsCards() {
  return (
    <div className="container flex-wrap justify-center gap-10 hidden desk:flex">
      {cardsItems.map((item, i) => (
        <div
          key={i}
          className="rounded-10 bg-darkBlue relative flex h-[396px] w-[280px] overflow-hidden border border-white/30 p-30"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--color-ocean)_0%,transparent_70%)] opacity-30" />
          <div className="relative z-10 flex h-full w-full flex-col">
            <h2 className="text-left text-20 font-bounded font-normal">{item.title}</h2>
            <div className="mt-auto flex justify-center">
              <Image width={177} height={136} src={item.image} alt={item.alt} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
