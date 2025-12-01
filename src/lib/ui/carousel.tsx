"use client";

import * as React from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";

import { cn } from "@/lib/utils";
import { Button } from "@/lib/ui/button";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<"div"> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn("relative", className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<"div">) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden" data-slot="carousel-content">
      <div
        className={cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className)}
        {...props}
      />
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<"div">) {
  const { orientation } = useCarousel();

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
}

function CarouselPrevious({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      data-slot="carousel-previous"
      className={cn(
        "bg-darkBlue static h-56 w-56 rounded-full p-0 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(69,148,233,0.7),inset_0_0.125rem_0.5rem_rgba(69,148,233,0.4)]",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollPrev}
      {...props}
    >
      <svg
        className="h-56 w-56"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="55.5"
          y="55.5"
          width="55"
          height="55"
          rx="27.5"
          transform="rotate(180 55.5 55.5)"
          fill="#0E1D3A"
        />
        <rect
          x="55.5"
          y="55.5"
          width="55"
          height="55"
          rx="27.5"
          transform="rotate(180 55.5 55.5)"
          stroke="url(#paint0_linear_385_710)"
        />
        <path
          d="M11.6465 27.6464C11.4512 27.8417 11.4512 28.1583 11.6465 28.3536L14.8284 31.5355C15.0237 31.7308 15.3403 31.7308 15.5355 31.5355C15.7308 31.3403 15.7308 31.0237 15.5355 30.8284L12.7071 28L15.5355 25.1716C15.7308 24.9763 15.7308 24.6597 15.5355 24.4645C15.3403 24.2692 15.0237 24.2692 14.8284 24.4645L11.6465 27.6464ZM44 28L44 27.5L12 27.5L12 28L12 28.5L44 28.5L44 28Z"
          fill="white"
        />
        <defs>
          <linearGradient
            id="paint0_linear_385_710"
            x1="64.5"
            y1="64.5"
            x2="104.5"
            y2="104.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4594E9" />
            <stop offset="0.5" stopColor="#4594E9" stopOpacity="0" />
            <stop offset="1" stopColor="#4594E9" />
          </linearGradient>
        </defs>
      </svg>

      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function CarouselNext({ className, ...props }: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      data-slot="carousel-next"
      className={cn(
        "group bg-darkBlue static h-56 w-56 rounded-full p-0 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(69,148,233,0.7),inset_0_0.125rem_0.5rem_rgba(69,148,233,0.4)] transition-all duration-400",
        orientation === "horizontal"
          ? "top-1/2 -right-12 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      onClick={scrollNext}
      {...props}
    >
      <svg
        className="h-56 w-56"
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="55" height="55" rx="27.5" fill="#0E1D3A" />
        <rect
          x="0.5"
          y="0.5"
          width="55"
          height="55"
          rx="27.5"
          stroke="url(#paint0_linear_385_708)"
        />
        <path
          d="M44.3536 28.3536C44.5488 28.1583 44.5488 27.8417 44.3536 27.6464L41.1716 24.4645C40.9763 24.2692 40.6597 24.2692 40.4645 24.4645C40.2692 24.6597 40.2692 24.9763 40.4645 25.1716L43.2929 28L40.4645 30.8284C40.2692 31.0237 40.2692 31.3403 40.4645 31.5355C40.6597 31.7308 40.9763 31.7308 41.1716 31.5355L44.3536 28.3536ZM12 28V28.5H44V28V27.5H12V28Z"
          fill="white"
        />
        <defs>
          {/* твой существующий градиент для обводки */}
          <linearGradient
            id="paint0_linear_385_708"
            x1="8.5"
            y1="8.5"
            x2="48.5"
            y2="48.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4594E9" />
            <stop offset="0.5" stopColor="#4594E9" stopOpacity="0" />
            <stop offset="1" stopColor="#4594E9" />
          </linearGradient>

          {/* НУЖНЫЙ ГРАДИЕНТ ДЛЯ ХОВЕРА: #0E1D3A → #2750A0 */}
          {/* Горизонтально слева направо */}
          <linearGradient
            id="hoverGradient"
            x1="0"
            y1="0"
            x2="1"
            y2="0"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0" stopColor="#0E1D3A" />
            <stop offset="1" stopColor="#2750A0" />
          </linearGradient>
        </defs>
      </svg>

      <span className="sr-only">Next slide</span>
    </Button>
  );
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};
