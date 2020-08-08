export default function convertHourToMinute(hourDay: string) {
  const [hour, minutes] = hourDay.split(':').map(Number);

  return (hour * 60) + minutes;
}