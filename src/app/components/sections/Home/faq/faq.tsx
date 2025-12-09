import { Title } from "@/app/components/ui/Title";
import { Separator } from "@/lib/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/lib/ui/accordion";

export function FAQ() {
  return (
    <section id="faq" className="xs:scroll-mt-120 mb-70 scroll-mt-100 md:mb-90 lg:mb-120">
      <div className="container">
        <Title>FAQ</Title>
        <Accordion className="grid grid-cols-1 gap-20 lg:grid-cols-2" type="single" collapsible>
          <AccordionItem className="flex flex-col gap-16" value="item-1">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Чем управленческий учёт отличается от бухучёта?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">Информация от Ольги</p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="flex flex-col gap-16" value="item-2">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Как часто у вас отчётность?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">
                Презентация итогов — раз в месяц, при CFO‑сопровождении — еженедельные слоты.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="flex flex-col gap-16" value="item-3">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Кто видит наши данные?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">
                Только команда проекта. Подписываем NDA, доступ — по принципу минимальной
                достаточности.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="flex flex-col gap-16" value="item-4">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Можно ли стартовать «с нуля» за месяц?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">
                Базовый контур УУ обычно разворачиваем за 30‑60 дней. Срок зависи от масштаба и
                доступности данных.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="flex flex-col gap-16" value="item-5">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Вы работаете удалёно?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">
                Да, по всей РФ и СНГ; встречи — онлайн.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="flex flex-col gap-16" value="item-6">
            <AccordionTrigger className="cursor-pointer">
              <h2 className="text-16 lg:text-18 desk:text-20 font-bounded font-normal">
                Поможете ли с кредитом/овердрафтом?
              </h2>
            </AccordionTrigger>
            <Separator gradientDirection="ltr" />
            <AccordionContent>
              <p className="text-16 desk:text-18 font-onest font-extralight">
                Да, готовим пакет документов и взаимодействуем с банками/инвесторами.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
