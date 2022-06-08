import { sortEventsAndCountNeighbours } from "./eventPlacing";
import { buildEvent } from "./fixtures";

describe("sortEventsAndCountNeighbours", () => {
  const arr = [
    buildEvent("2021-09-10 9:00", "2021-09-10 10:00"),
    buildEvent("2021-09-10 9:30", "2021-09-10 10:00"),
    buildEvent("2021-09-10 11:00", "2021-09-10 13:00"),
    buildEvent("2021-09-10 12:00", "2021-09-10 13:00"),
    buildEvent("2021-09-10 12:23", "2021-09-10 13:20"),
  ];
  it("should sorted array of events and their neighbour count", () => {
    expect(sortEventsAndCountNeighbours(arr)).toEqual([
      { event: arr[0], indexOfEvent: 1 },
      { event: arr[1], indexOfEvent: 2 },
      { event: arr[2], indexOfEvent: 1 },
      { event: arr[3], indexOfEvent: 2 },
      { event: arr[4], indexOfEvent: 3 },
    ]);
  });
});
