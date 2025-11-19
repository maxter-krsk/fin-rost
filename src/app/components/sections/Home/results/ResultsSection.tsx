import { Title } from "@/app/components/ui/Title";
import { ResultsCards } from "./ResultsCards"
// import { ResultsCardsSlider } from "./ResultsCardsSlider"

export function ResultsSection() {
    return (
        <section>
            <Title>Ваш результат — наш опыт</Title>
            <ResultsCards />
        </section>
    )
}