import { AboutMobile } from "./AboutMobile";
import { AboutDesk } from "./AboutDesk";

import { Title } from "@/app/components/ui/Title";

export function About() {
    return (
        <section aria-labelledby="founder-title">
            <Title>Основатель компании</Title>
            <AboutMobile />
            <AboutDesk />
        </section>
    )
}