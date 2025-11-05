import { cn } from "@/lib/utils";
import Link from "next/link";

type Variant = "white" | "orange";

type CommonProps = {
  className?: string;
  children: React.ReactNode;
  variant?: Variant;
};

type ButtonAsButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLinkProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const variantClasses: Record<Variant, string> = {
  white: "bg-white text-black",
  orange: "bg-orange-500 text-white",
};

const baseClasses = "font-unbounded text-18 py-14 px-20 cursor-pointer";
export function Button(props: ButtonProps) {
  if ("href" in props && props.href) {
    const { href, children, className, variant = "white", ...anchorProps } = props;
    const classes = cn(baseClasses, variantClasses[variant], className);
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  const { children, className, variant = "white", ...buttonProps } = props as ButtonAsButtonProps;
  const classes = cn(baseClasses, variantClasses[variant], className);
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
