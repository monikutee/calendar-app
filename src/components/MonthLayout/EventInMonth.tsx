import * as React from "react";
import { CalendarEvent } from "./../../types";
import { getEventTime } from "../../helpers/layoutHelper";

interface EventProps {
  event: CalendarEvent;
  index: number;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

export const EventInMonth: React.FC<EventProps> = ({
  event,
  index,
  onClick,
}) => {
  if (index > 3) {
    return (
      <div
        role="button"
        data-date={event.startDate.toString()}
        className="month_table-event-show-more"
        onClick={(e) => {
          onClick(e);
        }}
      >
        Show more events
      </div>
    );
  } else {
    const eventTiming =
      getEventTime(event).startTime + " - " + getEventTime(event).endTime + " ";
    return (
      <div role="button" className="month_table-event">
        <button
          className="month_table-event__attendance-button"
          type="button"
        />
        <span className="month_table-event__time">{eventTiming}</span>
        <span className="month_table-event__title">{event.title}</span>
      </div>
    );
  }
};
