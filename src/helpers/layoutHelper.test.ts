import * as uut from "./layoutHelper";

import { buildEvent } from "./fixtures";

describe("compareEventsByStartDate", () => {
  const { compareEventsByStartDate } = uut;

  it("should return diff of two events startDate in miliseconds", () => {
    expect(
      compareEventsByStartDate(
        buildEvent("2021-09-03 9:00", "2021-09-03 10:00"),
        buildEvent("2021-09-04 9:00", "2021-09-04 10:00")
      )
    ).toEqual(
      new Date("2021-09-03 9:00").getTime() -
        new Date("2021-09-04 9:00").getTime()
    );
  });
  it("should return diff of two events startDate in miliseconds", () => {
    expect(
      compareEventsByStartDate(
        buildEvent("2021-09-03 9:00", "2021-09-03 10:00"),
        buildEvent("2021-09-03 11:00", "2021-09-03 13:00")
      )
    ).toEqual(
      new Date("2021-09-03 9:00").getTime() -
        new Date("2021-09-03 11:00").getTime()
    );
  });
  it("should return diff of two events startDate in miliseconds", () => {
    expect(
      compareEventsByStartDate(
        buildEvent("2021-09-03 23:58", "2021-09-04 5:00"),
        buildEvent("2021-09-03 22:59", "2021-09-04 10:00")
      )
    ).toEqual(
      new Date("2021-09-03 23:58").getTime() -
        new Date("2021-09-03 22:59").getTime()
    );
  });
});
