import * as React from "react";
import { Calendar } from "./Calendar";
import { Context } from "../../contextStore";

export const Sidebar: React.FC = () => {
  const { setModalVisibility } = React.useContext(Context);
  return (
    <aside className="sidebar--left">
      <button
        id="create-event"
        className="createButton"
        onClick={() => setModalVisibility(true)}
      >
        Create Event
      </button>
      <Calendar />
    </aside>
  );
};
