import Image from "next/image";
import { Title } from "@/app/components/ui/Title";
import { Separator } from "@/lib/ui/separator";

export function AboutMobile() {
  return (
    <section aria-labelledby="founder-title">
      <div className="container">
        <Title>Основатель компании</Title>
        <article>
          <div aria-labelledby="founder-name">
            <h2 id="founder-name">Ольга Кирьянова</h2>
            <Separator aria-hidden="true" />
            <p>Основатель компании «Финансовый Рост»</p>

            <figure>
              <blockquote>
                <p>
                  Порядок в бизнесе —<br /> это порядок в жизни!
                </p>
              </blockquote>
            </figure>

            <div aria-labelledby="communities-heading">
              <h3 id="communities-heading">
                Участие в<br /> профессиональных
                <br /> сообществах
              </h3>
              <ul className="flex">
                <li>
                  <span>Сообщество 1</span>
                </li>
                <li>
                  <span>Сообщество 2</span>
                </li>
                <li>
                  <span>Сообщество 3</span>
                </li>
              </ul>
            </div>

            <Image
              src="/images/about/olga-kiryanova.png"
              alt="Фотография Ольги Кирьяновой"
              width={300}
              height={343}
            />
          </div>

          <div aria-labelledby="experience-heading">
            <h3 id="experience-heading">
              Эксперт по финансам | <span>Опыт — 18+ лет</span>
            </h3>
            <ul>
              <li>
                Прошла путь от кредитного специалиста до начальника отдела кредитования сегмента МСБ
                и крупный бизнес
              </li>
              <li>С 2018 года основатель компании по финансовому консалтингу</li>
              <li>
                Помогаю бизнесу выстроить прозрачную финансовую систему, управлять прибылью и
                принимать решения на основе цифр
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
}
