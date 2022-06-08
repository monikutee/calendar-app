import * as React from "react";
import { Context } from "../../contextStore";

export const LayoutSelector: React.FC = () => {
  const { isWeekLayout, setWeekLayout } = React.useContext(Context);
  const handleChangeLayout = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const layout = event.target;
    if (layout.value === "week") {
      setWeekLayout(true);
    } else {
      setWeekLayout(false);
    }
  };
  return (
    <div className="navbar--right">
      <select
        id="layoutSelector"
        className="timeSelector"
        onChange={handleChangeLayout}
        value={isWeekLayout ? "week" : "month"}
      >
        <option value="week">Week</option>
        <option value="month">Month</option>
      </select>
    </div>
  );
};
