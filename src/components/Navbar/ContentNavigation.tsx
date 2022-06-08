import * as React from "react";
import {
  nextWeek,
  previousMonth,
  previousWeek,
  nextMonth,
  getLongMonthYearString,
} from "../../helpers/dateHelper";
import { Context } from "../../contextStore";

export const ContentNavigation: React.FC = () => {
  const { isWeekLayout, displayDate, setDisplayDate } =
    React.useContext(Context);

  function changeDisplayDate(
    callbackForWeek: (date: Date) => Date,
    callbackForMonth: (date: Date) => Date
  ) {
    if (isWeekLayout) {
      setDisplayDate(callbackForWeek(displayDate));
      setDisplayDate(callbackForWeek(displayDate));
    } else {
      setDisplayDate(callbackForMonth(displayDate));
      setDisplayDate(callbackForMonth(displayDate));
    }
  }

  return (
    <div className="navbar--middle">
      <button
        type="button"
        id="today-button"
        className="todayBtn"
        onClick={() => {
          setDisplayDate(new Date());
        }}
      >
        Today
      </button>
      <nav className="navbar_month-navigation">
        <div
          className="navbar--middle__previous-month"
          id="navbar_previous"
          onClick={() => {
            changeDisplayDate(previousWeek, previousMonth);
          }}
        >
          <i className="fa fa-angle-left"></i>
        </div>
        <div
          className="navbar--middle__next-month"
          id="navbar_next"
          onClick={() => {
            changeDisplayDate(nextWeek, nextMonth);
          }}
        >
          <i className="fa fa-angle-right"></i>
        </div>
      </nav>
      <div className="navbar--middle__monthYear">
        <span id="monthYear">{getLongMonthYearString(displayDate)}</span>
      </div>
    </div>
  );
};
