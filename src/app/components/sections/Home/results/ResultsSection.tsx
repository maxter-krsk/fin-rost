import { Title } from "@/app/components/ui/Title";
import { ResultsCards } from "./ResultsCards";
import { ResultsCardsSlider } from "./ResultsCardsSlider";

export function ResultsSection() {
  return (
    <section id="advantages" className="xs:mb-70 mb-50 md:mb-90 lg:mb-120 scroll-mt-100 xs:scroll-mt-120">
      <Title>Ваш результат — наш опыт</Title>
      <ResultsCards />
      <ResultsCardsSlider />
    </section>
  );
}
