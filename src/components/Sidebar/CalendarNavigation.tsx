import * as React from "react";
import { SiderbarCalendarDate } from "../../types/index";
import {
  getShortMonthYearString,
  nextMonth,
  previousMonth,
} from "../../helpers/dateHelper";

export const CalendarNavigation: React.FC<SiderbarCalendarDate> = React.memo(
  ({ displayMonthDate, setDisplayMonthDate }) => {
    return (
      <div className="calendar__props">
        <div className="calendar__props-yearMonth">
          <span id="calendar-date">
            {getShortMonthYearString(displayMonthDate)}
          </span>
        </div>
        <div className="calendar__props-navigation">
          <div
            className="calendar__props-previous-month"
            id="sidebar__previous-month"
            onClick={() => {
              setDisplayMonthDate(previousMonth(displayMonthDate));
            }}
          >
            <i className="fa fa-angle-left"></i>
          </div>
          <div
            className="calendar__props-next-month"
            id="sidebar__next-month"
            onClick={() => {
              setDisplayMonthDate(nextMonth(displayMonthDate));
            }}
          >
            <i className="fa fa-angle-right"></i>
          </div>
        </div>
      </div>
    );
  }
);
