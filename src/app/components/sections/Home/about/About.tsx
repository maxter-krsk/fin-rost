import { AboutMobile } from "./AboutMobile";
import { AboutDesk } from "./AboutDesk";

import { Title } from "@/app/components/ui/Title";

export function About() {
  return (
    <section
      id="about"
      className="xs:scroll-mt-120 mb-70 scroll-mt-100 md:mb-90 lg:mb-120"
      aria-labelledby="founder-title"
    >
      <Title>Основатель компании</Title>
      <AboutMobile />
      <AboutDesk />
    </section>
  );
}
