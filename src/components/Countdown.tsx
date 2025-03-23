import { useState, useEffect } from 'react';
import getTimeDiff from '../utils/getTimeDiff';

export default function Countdown() {
  const targetDate = new Date(2026, 1, 16);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeLeft = getTimeDiff(now, targetDate);

  return (
    <div className="h-1/5 lg:h-1/2 flex flex-col justify-evenly items-center">
      <h1 className="font-glass text-white text-3xl lg:text-7xl">
        Online 40 års jubileum
      </h1>
      <h1 className="font-glass text-white text-3xl lg:text-7xl">
        {timeLeft.days}d {timeLeft.hours}t {timeLeft.minutes}m{' '}
        {timeLeft.seconds}s
      </h1>
    </div>
  );
}
