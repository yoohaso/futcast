export function formatDate(timestamp: string) {
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
  const date = new Date(timestamp);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = daysOfWeek[date.getDay()];

  return `${month}월 ${day}일 (${dayOfWeek})`;
}
