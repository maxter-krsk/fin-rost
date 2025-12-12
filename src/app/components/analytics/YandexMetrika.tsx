"use client";

import Script from "next/script";
import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    ym?: (...args: unknown[]) => void;
  }
}

const counterId = 105805229;

export default function YandexMetrika() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url =
      (pathname || "/") + (searchParams?.toString() ? `?${searchParams}` : "");

    window.ym?.(counterId, "hit", url);
  }, [pathname, searchParams]);

  return (
    <>
      <Script id="ym-tag" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {
              if (document.scripts[j].src === r) { return; }
            }
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${counterId}', 'ym');

          ym(${counterId}, 'init', {
            ssr:true,
            webvisor:true,
            clickmap:true,
            accurateTrackBounce:true,
            trackLinks:true
          });
        `}
      </Script>

      <noscript>
        <div>
          <img
            src={`https://mc.yandex.ru/watch/${counterId}`}
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>
    </>
  );
}