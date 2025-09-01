import { useState, useEffect } from 'react';
import getTimeDiff from '../utils/getTimeDiff';

interface CountdownProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

export default function Countdown({ containerRef }: CountdownProps) {
  const [now, setNow] = useState(new Date());
  const [scrollY, setScrollY] = useState(0)
  const targetDate = new Date(2026, 1, 16);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollY(container.scrollTop);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [containerRef]);

  const timeLeft = getTimeDiff(now, targetDate);

  return (
    <div className="flex flex-col justify-center items-center animate-flicker">
      <h1 className="font-glass text-white text-3xl lg:text-7xl mb-2">
        Online 40 års jubileum
      </h1>

      <div className={scrollY > 400 ? "absolute top-16" : "sticky top-16"}>
        <h1
          className={`
            font-glass text-white text-3xl lg:text-7xl mt-2 bg-black z-50
          `}
        >
          {timeLeft.days}d {timeLeft.hours}t {timeLeft.minutes}m {timeLeft.seconds}s
        </h1>
      </div>
    </div>
  );
}

