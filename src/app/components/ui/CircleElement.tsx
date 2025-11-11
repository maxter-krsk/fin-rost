import React from "react";
import clsx from "clsx";

type CircleElementProps = {
  children?: React.ReactNode;
  className?: string;
  size?: number;
  borderWidth?: number;
  gradient?: string;
  fillColor?: string;
  ariaLabel?: string;
};

type CircleCSSVars = {
  "--circle-border-width"?: string;
  "--circle-fill"?: string;
  "--circle-gradient"?: string;
};

const CircleElement: React.FC<CircleElementProps> = ({
  children,
  className,
  size,
  borderWidth = 2,
  gradient = `
    linear-gradient(
      140deg,
      var(--color-ocean) 10%,
      var(--color-darkBlue) 48%,
      var(--color-darkBlue) 52%,
      var(--color-ocean) 90%
    )
  `,
  fillColor = "var(--color-darkBlue)",
  ariaLabel,
}) => {
  const style: React.CSSProperties & CircleCSSVars = {
    ...(size ? { width: size, height: size } : {}),
    "--circle-border-width": `${borderWidth}px`,
    "--circle-fill": fillColor,
    "--circle-gradient": gradient,
  };

  return (
    <span
      className={clsx("circle-gradient", !size && "circle-size", className)}
      style={style}
      aria-label={ariaLabel}
      role={ariaLabel ? "img" : undefined}
    >
      {children}
    </span>
  );
};

export default CircleElement;
