import { Title } from "@/app/components/ui/Title";
import { BarrierCardsMobile } from "./BarrierCardsMobile";
import { BarrierCards } from "./BarrierCards";

export function BarrierSection() {
  return (
    <section id="problems" className="xs:mb-70 mb-50 md:mb-90 lg:mb-120 scroll-mt-100 xs:scroll-mt-120">
      <div className="container">
        <Title>Что мешает расти</Title>
        <BarrierCards />
        <BarrierCardsMobile />
      </div>
    </section>
  );
}
