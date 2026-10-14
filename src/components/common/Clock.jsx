import { useEffect, useState } from "react";
import { getTimeInTimeZone } from "../../utils/time";

export default function Clock({ timeZone }) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return <span>{getTimeInTimeZone(timeZone, undefined, now)}</span>;
}
