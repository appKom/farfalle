export default function getTimeDiff(
  startDate: string | Date,
  endDate: string | Date
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let diffMs = Math.abs(end.getTime() - start.getTime());

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  diffMs %= 1000 * 60 * 60 * 24


  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  diffMs %= 1000 * 60 * 60;

  const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;

  const minutes = Math.floor(diffMs / (1000 * 60));
  diffMs %= 1000 * 60;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const seconds = Math.floor(diffMs / 1000);

  const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  return { days, hours: formattedHours, minutes: formattedMinutes, seconds: formattedSeconds };
}
