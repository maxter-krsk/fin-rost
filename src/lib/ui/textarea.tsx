import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input placeholder:text-slate focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive text-14 xs:text-16 flex field-sizing-content min-h-16 w-full rounded-12 border outline-none focus-visible:ring-[0.063rem]",
        className,
        
      )}
      {...props}
    />
  );
}

export { Textarea };
