export class Gigasecond {
  val: Date;
  constructor (val: Date) {
    this.val = val;
  }
  public date() {
    let date = new Date(this.val);
    date.setUTCSeconds(date.getUTCSeconds() + 1_000_000_000);
    return date;
  }
}

// let date = this.val; means this.val is a reference to a Date object.
// date is not a new Date — it's pointing to the same object in memory as this.val.
// Don't mutate the original date object, instead create a new one with `new Date(this.val)`.

// If the setter methods don't manually handle the overflow logic, this is how you can do it:
function addGigasecond(date: Date): Date {
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth();
  let day = date.getUTCDate();
  let hour = date.getUTCHours();
  let minute = date.getUTCMinutes();
  let second = date.getUTCSeconds();

  second += 1_000_000_000;
  if (second >= 60) {
    minute += Math.floor(second / 60);
    second = second % 60;
  }
  if (minute >= 60) {
    hour += Math.floor(minute / 60);
    minute = minute % 60;
  }
  if (hour >= 24) {
    day += Math.floor(hour / 24);
    hour = hour % 24;
  }

  // Manually account for month/day overflow
  while (true) {
    // Creating a date at the 0th day of the next month, which is the last day of the current month.
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    if (day <= daysInMonth) break;

    day -= daysInMonth;
    month += 1;

    if (month > 11) {
      month = 0;
      year += 1;
    }
  }
  return new Date(year, month, day, hour, minute, second);
}