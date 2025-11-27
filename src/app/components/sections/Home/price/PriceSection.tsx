import { Title } from "@/app/components/ui/Title";
import { PriceCardsSlider } from "./PriceCardsSlider";
import { PriceCards } from "./PriceCards";

export function PriceSection() {
  return (
    <section className="container">
      <Title>Прайс</Title>
      <PriceCardsSlider />
      <PriceCards />
    </section>
  );
}
