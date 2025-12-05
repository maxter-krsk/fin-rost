"use client";
import React, { useEffect, useState } from "react";

export const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const gradientStyle = {
    width: `${progress}%`,
    background: `linear-gradient(to right, orange ${progress}%, transparent 100%)`,
  };

  return (
    <div className="fixed top-0 left-0 z-[999] h-6 w-full">
      <div className="h-full origin-left transition-all" style={gradientStyle} />
    </div>
  );
};
