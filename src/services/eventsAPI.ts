import { CalendarEvent, CalendarEventAllStrings } from "../types";

export function addEvent(event: CalendarEvent): void {
  fetch("http://localhost:5001", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(event),
  }).catch((error) => {
    console.error("Error:", error);
  });
}

export async function getEvents(): Promise<CalendarEvent[]> {
  const respData = await fetch("http://localhost:5001", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).catch((error) => {
    console.error("Error:", error);
  });
  if (!respData) {
    throw new Error("could not load events from back-end");
  }
  const events: CalendarEventAllStrings[] = await respData
    .json()
    .catch((e) => console.log(e));

  return events.map((event: CalendarEventAllStrings) => {
    return {
      ...event,
      startDate: new Date(event.startDate),
      endDate: new Date(event.endDate),
    };
  });
}
