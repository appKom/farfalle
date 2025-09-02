import { useState, useEffect } from "react";

interface ScrollIndicatorProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function ScrollIndicator({ containerRef }: ScrollIndicatorProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollY(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  return (
    <div className={`flex animate-scroll-indicator space-x-50 lg:space-x-200 ${scrollY > 0 ? "invisible" : ""}`}>
      <h1 className="font-glass text-white text-5xl lg:text-8xl rotate-180">^</h1>
      <h1 className="font-glass text-white text-5xl lg:text-8xl rotate-180">^</h1>
    </div>
  );
}
