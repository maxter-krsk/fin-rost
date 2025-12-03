"use client";

import { useEffect, useRef, useState } from "react";

interface Section {
  id: string;
  label: string;
}

interface VerticalProgressProps {
  sections: Section[];
}

export const VerticalProgress: React.FC<VerticalProgressProps> = ({ sections }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const footerObserverRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const elements = sections.map((section) => document.getElementById(section.id));
    const footer = document.getElementById("footer");

    if (!elements.length) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) setActiveIndex(index);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    elements.forEach((el) => el && observerRef.current?.observe(el));

    if (footer) {
      footerObserverRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            setVisible(!entry.isIntersecting);
          });
        },
        { root: null, threshold: 0 }
      );
      footerObserverRef.current.observe(footer);
    }

    return () => {
      observerRef.current?.disconnect();
      footerObserverRef.current?.disconnect();
    };
  }, [sections]);

  return (
    <div
      className={`
        rounded-30 fixed top-1/2 left-[0.40rem] z-50 hidden -translate-y-1/2 transform flex-col space-y-6
        bg-white/10 p-6 backdrop-blur-md lg:flex
        transition-opacity duration-500 ease-in-out
        ${visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}
    >
      {sections.slice(0, -1).map((section, index) => (
        <div
          key={section.id}
          className={`h-6 w-6 cursor-pointer rounded-full transition-all duration-300 ${index === activeIndex ? "h-30 bg-white" : "bg-[#858C9B]"}`}
          onClick={() => {
            const el = document.getElementById(section.id);
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        />
      ))}
    </div>
  );
};

