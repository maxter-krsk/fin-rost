import { Title } from "@/app/components/ui/Title";
import { NewsCard } from "@/app/components/ui/NewsCard";
import { Button } from "@/lib/ui/button";

const newsList = [
  {
    image: "/images/news/06-06-2024.jpg",
    alt: "Мастер-класс Ольги Кирьяновой на форуме «Мой бизнес»",
    title: "Мастер-класс Ольги Кирьяновой на форуме «Мой бизнес»",
    description:
      "Ольга рассказала, как разделять личные и бизнес-финансы для стабильного роста компании.",
    link: "#",
    date: "06.06.2024",
  },
  {
    image: "/images/news/24-05-2024.jpg",
    alt: "«Деловая Россия» на форуме «Мой бизнес»",
    title: "«Деловая Россия» на форуме «Мой бизнес»",
    description:
      "Эксперт Ольга Кирьянова провела мастер-класс о разделении личных и корпоративных финансов.",
    link: "#",
    date: "24.05.2024",
  },
  {
    image: "/images/news/09-04-2024.jpg",
    alt: "Совещание по инвестиционному потенциалу края",
    title: "Совещание по инвестиционному потенциалу края",
    description:
      "Ольга Кирьянова обсудила меры поддержки МСП и развитие кадрового и инвестиционного потенциала региона.",
    link: "#",
    date: "09.04.2024",
  },
];

export function News() {
  return (
    <section>
      <div className="container">
        <Title>Новости</Title>
        <div className="xs:grid-cols-2 mb-50 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-20">
          {newsList.map((item, i) => (
            <div key={i} className={i === 2 ? "hidden lg:block" : ""}>
              <NewsCard {...item} />
            </div>
          ))}
        </div>
        <div className="pb-70 text-center md:pb-90 lg:pb-50">
          <Button variant="orange" href="/news">
            Все новости
          </Button>
        </div>
      </div>
    </section>
  );
}
