"use client";

import * as React from "react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { cn } from "@/lib/utils";

type GradientDirection = "ltr" | "rtl" | "ttb" | "btt" | "center";

interface SeparatorProps extends React.ComponentProps<typeof SeparatorPrimitive.Root> {
  gradientDirection?: GradientDirection;
}

function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  gradientDirection = "ltr",
  ...props
}: SeparatorProps) {
  const gradientMap: Record<GradientDirection, string> = {
    ltr: "bg-gradient-to-r from-orange to-transparent",
    rtl: "bg-gradient-to-l from-orange to-transparent",
    ttb: "bg-gradient-to-b from-orange to-transparent",
    btt: "bg-gradient-to-t from-orange to-transparent",
    center: "bg-gradient-to-r from-transparent via-orange to-transparent",
  };

  const sizeClass = orientation === "horizontal" ? "h-[0.125rem] w-full" : "w-[0.125rem] h-full";

  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn("shrink-0", sizeClass, gradientMap[gradientDirection], className)}
      {...props}
    />
  );
}

export { Separator };
