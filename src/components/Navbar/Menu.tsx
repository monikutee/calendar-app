import * as React from "react";

export const Menu: React.FC = () => {
  return (
    <div className="navbar--left">
      <div className="menu">
        <i className="fa fa-bars"></i>
      </div>
      <span className="label">Calendar</span>
    </div>
  );
};
