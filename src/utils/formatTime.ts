export function formatTime(timestamp: string) {
  const date = new Date(timestamp);
  const hours = date.getHours();

  return `${hours}시`;
}
