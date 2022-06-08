import Chance from "chance";
import { CalendarEvent } from "../types";

const chance = new Chance();

export function buildEvent(start: string, end: string): CalendarEvent {
  return {
    id: chance.guid(),
    title: chance.name(),
    startDate: new Date(start),
    endDate: new Date(end),
  };
}
