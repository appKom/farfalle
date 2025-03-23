export default function getTimeDiff(
  startDate: string | Date,
  endDate: string | Date
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let diffMs = Math.abs(end.getTime() - start.getTime());

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  diffMs %= 1000 * 60 * 60 * 24;

  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  diffMs %= 1000 * 60 * 60;

  const minutes = Math.floor(diffMs / (1000 * 60));
  diffMs %= 1000 * 60;

  const seconds = Math.floor(diffMs / 1000);

  return { days, hours, minutes, seconds };
}
