import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
         "border-none placeholder:text-slate focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive text-14 xs:text-16 flex field-sizing-content min-h-16 w-full rounded-12 border bg-transparent outline-none focus-visible:ring-[0.063rem] text-slate bg-midnight font-normal transition-[color,box-shadow] disabled:cursor-not-allowed disabled:opacity-50 px-30 py-16",
        className
      )}
      {...props}
    />
  );
}

export { Input };
