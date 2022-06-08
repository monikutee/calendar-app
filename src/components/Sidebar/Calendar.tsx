import * as React from "react";
import { CalendarNavigation } from "./CalendarNavigation";
import { CalendarDays } from "./CalendarDays";
import { Context } from "../../contextStore";

export const Calendar: React.FC = () => {
  const { displayDate } = React.useContext(Context);
  const [displayMonthDate, setDisplayMonthDate] = React.useState(new Date());

  React.useEffect(() => {
    setDisplayMonthDate(displayDate);
  }, [displayDate]);

  return (
    <div className="mini_calendar">
      <CalendarNavigation
        displayMonthDate={displayMonthDate}
        setDisplayMonthDate={setDisplayMonthDate}
      />
      <div className="weekdays">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <CalendarDays
        displayMonthDate={displayMonthDate}
        setDisplayMonthDate={setDisplayMonthDate}
      />
    </div>
  );
};
