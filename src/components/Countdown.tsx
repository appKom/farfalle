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
    <div>
      <p>
        {timeLeft.days} dager {timeLeft.hours} timer {timeLeft.minutes} minutter{' '}
        {timeLeft.seconds} sekunder
      </p>
    </div>
  );
}
