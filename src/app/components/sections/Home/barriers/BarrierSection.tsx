import { Title } from "@/app/components/ui/Title";
import { BarrierCardsMobile } from "./BarrierCardsMobile";
import { BarrierCards } from "./BarrierCards";

export function BarrierSection() {
    return (
        <section className="container">
            <Title>Что мешает расти</Title>
            <BarrierCards />
            <BarrierCardsMobile />
        </section>
    );
}

