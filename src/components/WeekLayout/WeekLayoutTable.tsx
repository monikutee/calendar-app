import * as React from "react";
import { getWeekHours, getByIdOrError } from "../../helpers/layoutHelper";
import { Context } from "../../contextStore";
import { Row } from "./Row";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const WeekLayoutTable: React.FC = () => {
  const { displayDate } = React.useContext(Context);

  const scrollToCurrentTime = () => {
    const displayHour = displayDate.getHours();

    if (displayHour > 1) {
      getByIdOrError((displayHour - 1).toString()).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  React.useEffect(() => {
    sleep(100).then(() => scrollToCurrentTime());
  }, [displayDate]);

  return (
    <div className="week_table">
      <table id="week_table-layout" className="week_table-layout">
        <tbody>
          {getWeekHours(displayDate).map((_row: Date, idx: number) => {
            return <Row key={idx + "hour"} date={displayDate} hour={idx} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
