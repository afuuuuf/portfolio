export function getTimeInTimeZone(
  timeZone,
  locale = "en-GB",
  date = new Date(),
) {
  return new Intl.DateTimeFormat(locale, {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "shortOffset",
  }).format(date);
}
