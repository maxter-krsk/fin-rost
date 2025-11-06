import Image from "next/image";
import { Button } from "@/lib/ui/button";

export default function NotFound() {
  return (
    <section className="flex h-screen flex-col items-center justify-center">
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            className="mx-auto mb-50 pointer-events-none"
            src="/images/404/404.svg"
            alt="Страница не найдена"
            width={1002}
            height={380}
          />
          <h1 className="font-bounded text-14 xs:text-18 lg:text-20 mb-20 font-medium lg:mb-30">
            Упс... Страница не найдена
          </h1>
          <Button href="/" variant="orange">
            Вернуться на главную
          </Button>
        </div>
      </div>
    </section>
  );
}
