import Image from "next/image";
import Link from "next/Link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/lib/ui/accordion";
import { Button } from "@/lib/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-center uppercase">Главная страница</h1>
      <div className="container">
        <Button variant="orange">123</Button>
      </div>
    </div>
  );
}
