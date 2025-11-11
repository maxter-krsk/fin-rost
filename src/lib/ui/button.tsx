import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type Variant = "light" | "dark" | "orange";

type CommonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: Variant;
} & React.AriaAttributes & { [K in `data-${string}`]?: unknown }; // чтобы data-* и aria-* проходили

export type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonAsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & { href: string };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<Variant, string> = {
  light:
    "py-14 px-20 bg-white/10 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(255,255,255,0.4)]",
  dark:
    "py-14 px-20 w-full max-w-[23.75rem] bg-black/0.1 text-darkBlue [box-shadow:inset_0_-0.125rem_0.375rem_rgba(0,0,0,0.2),inset_0_0.125rem_0.5rem_rgba(14,29,58,0.4)]",
  orange:
    "py-16 px-32 bg-black/0.1 border border-orange/70 [box-shadow:inset_0_-0.125rem_0.375rem_rgba(221,155,29,0.4),inset_0_0.125rem_0.5rem_rgba(221,155,29,0.4)]",
};

const baseClasses =
  "relative inline-flex items-center justify-center text-18 font-bounded font-normal rounded-12 backdrop-blur-md cursor-pointer ";

// ⬇️ ЯВНО типизируем forwardRef, чтобы 'ref' был допустим
type ButtonComponent = React.ForwardRefExoticComponent<
  ButtonProps & React.RefAttributes<HTMLButtonElement>
>;

export const Button: ButtonComponent = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(props, ref) {
    if ("href" in props && props.href) {
      const { href, children, className, variant = "light", ...anchorProps } = props;
      const classes = cn(baseClasses, variantClasses[variant], className);
      return (
        <Link href={href} className={classes} {...anchorProps}>
          {children}
        </Link>
      );
    }

    const { children, className, variant = "light", ...buttonProps } =
      props as ButtonAsButtonProps;
    const classes = cn(baseClasses, variantClasses[variant], className);

    return (
      <button ref={ref} className={classes} {...buttonProps}>
        {children}
      </button>
    );
  }
);
