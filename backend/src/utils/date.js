export function convertToPsqlDate(date) {
  if (!date) {
    return undefined;
  }

  const psqlDate = new Date(date);
  const diffUtcToLocal = psqlDate.getTimezoneOffset() * 60 * 1000;

  // Subtract difference in ms between UTC and local time zone before using
  // `Date.soISOString()` to deal with the method's time zone conversion.
  psqlDate.setTime(psqlDate.getTime() - diffUtcToLocal);

  return psqlDate.toISOString().split("T")[0];
}

export function getWeekDates() {
  let thisMonday = new Date();

  // Get this week's monday date
  if (thisMonday.getDay() > 1) {
    thisMonday.setDate(thisMonday.getDate() - (thisMonday.getDay() - 1));
  } else if (thisMonday.getDay() === 0) {
    thisMonday.setDate(thisMonday.getDate() - 6);
  }

  let weekDates = [];
  let weekDay = new Date(thisMonday);
  const nextMonday = new Date(thisMonday).setDate(thisMonday.getDate() + 7);

  while (weekDay.getDate() !== nextMonday.getDate()) {
    weekDates.push(convertToPsqlDate(weekDay));
    weekDay.setDate(weekDay.getDate() + 1);
  }

  return weekDates;
}

export function getUpcomingMonday() {
  let today = new Date();
  let upcomingMonday;

  // Get next week monday's date
  if (today.getDay() > 1) {
    upcomingMonday = new Date(today).setDate(
      today.getDate() + (8 - today.getDay()),
    );
  } else if (today.getDay() === 0) {
    upcomingMonday = new Date(today).setDate(today.getDate() + 1);
  } else {
    upcomingMonday = new Date(today).setDate(today.getDate() + 7);
  }

  upcomingMonday = convertToPsqlDate(upcomingMonday);

  return upcomingMonday;
}
