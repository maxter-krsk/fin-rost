import { Hero } from "./components/sections/Home/hero/Hero";
import { About } from "./components/sections/Home/about/About";
import { BarrierSection } from "./components/sections/Home/barriers/BarrierSection";
import { Solutions } from "./components/sections/Home/solutions/Solutions";
import { ResultsSection } from "./components/sections/Home/results/ResultsSection";
import { Stageswork } from "./components/sections/Home/stageswork/Stageswork";
import { PriceSection } from "./components/sections/Home/price/PriceSection";
import { Form } from "./components/sections/Home/form/Form";
import { FAQ } from "./components/sections/Home/faq/faq";
import { Certificates } from "./components/sections/Home/certificates/Certificates";
import { ThankfulLetter } from "./components/sections/Home/thankful-letter/ThankfulLetter";
import { News } from "./components/sections/Home/news/News";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <BarrierSection />
      <Solutions />
      <ResultsSection />
      <Stageswork />
      <PriceSection />
      <Form />
      <FAQ />
      <Certificates />
      <ThankfulLetter />
      <News />
    </div>
  );
}
