import { Onest } from "next/font/google";
import localFont from "next/font/local";

export const onest = Onest({
  weight: ["200", "300", "400"],
  subsets: ["latin"],
});

export const bounded = localFont({
  src: [
    {
      path: "../../../../public/fonts/Bounded-Variable.woff2",
      style: "normal",
    },
  ],
  variable: "--font-bounded",
  display: "swap",
});
