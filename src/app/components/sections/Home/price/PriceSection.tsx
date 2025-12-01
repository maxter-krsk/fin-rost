import { Title } from "@/app/components/ui/Title";
import { PriceCardsSlider } from "./PriceCardsSlider";
import { PriceCards } from "./PriceCards";

export function PriceSection() {
  return (
    <section
      id="price"
      className="xs:mb-70 xs:scroll-mt-120 mb-50 scroll-mt-100 md:mb-90 lg:mb-120"
    >
      <div className="container">
        <Title>Прайс</Title>
        <PriceCardsSlider />
        <PriceCards />
      </div>
    </section>
  );
}
