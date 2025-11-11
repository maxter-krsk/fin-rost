import { clsx } from "clsx";

type TitleProps = {
  children: string;
  className?: string;
};

export function Title({ children, className }: TitleProps) {
  return (
    <div className="xs:mb-36 rounded-50 mx-auto mb-30 w-fit overflow-hidden bg-[linear-gradient(150deg,rgba(69,148,233,0.5)_0%,rgba(69,148,233,0)_42%,rgba(69,148,233,0)_75%,color-mix(in_srgb,var(--color-ocean)_50%,transparent)_100%)] p-[0.063rem] lg:mb-50">
      <div className="xs:gap-16 rounded-50 bg-darkBlue flex items-center gap-12 px-32 py-12">
        <span className="bg-orange h-10 w-10 rounded-full"></span>
        <h1 className={clsx("font-bounded text-14 xs:text-16 lg:text-18 font-normal", className)}>{children}</h1>
      </div>
    </div>
  );
}
