import * as React from "react";
import { getMonthDays } from "../../helpers/layoutHelper";
import {
  isNextMonth,
  isPreviousMonth,
  isEqual,
} from "../../helpers/dateHelper";
import { WEEKDAYS_TO_SUN } from "../../constants";
import { Context } from "../../contextStore";
import { getEventsByDay } from "../../helpers/layoutHelper";
import { EventInMonth } from "./EventInMonth";

export const MonthLayout: React.FC = () => {
  const { displayDate, setDisplayDate, events, setWeekLayout } =
    React.useContext(Context);

  function getClassName(date: Date) {
    if (isPreviousMonth(displayDate, date) || isNextMonth(displayDate, date)) {
      return "month_table-outer_date";
    }
    if (isEqual(new Date(), date)) {
      return "month_table-today_date";
    } else if (isEqual(displayDate, date)) {
      return "selected";
    }
  }

  const changeSelectedDate = React.useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (event.target instanceof HTMLElement && event.target.dataset.date) {
        setDisplayDate(new Date(event.target.dataset.date));
        setWeekLayout(true);
      }
    },
    [setDisplayDate]
  );

  return (
    <div id="selectMonth" className="month_layout">
      {getMonthDays(displayDate).map((day, index) => (
        <div className="month_table" key={day.toString() + "month"}>
          {index < 7 && (
            <div className="month_table-weekdays">
              {WEEKDAYS_TO_SUN[day.getDay()]}
            </div>
          )}
          <button
            className={getClassName(day)}
            data-date={day.toString()}
            onClick={changeSelectedDate}
            key={index + "month"}
          >
            {day.getDate().toString()}
          </button>
          <div className="month_table-events_list">
            {getEventsByDay(day, events).map((event, index) => {
              if (index > 4) {
                return null;
              }
              return (
                <EventInMonth
                  event={event}
                  key={event.id + "month-event"}
                  index={index}
                  onClick={changeSelectedDate}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
