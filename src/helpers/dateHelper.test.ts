import {
  getMonthFirstDay,
  padWithZero,
  getYearMonthDayString,
  getTimeHourString,
  addDay,
  getWeekStartDate,
  isPreviousMonth,
  isNextMonth,
  isEqual,
  nextWeek,
  previousWeek,
  nextMonth,
  previousMonth,
  getLongMonthYearString,
  getShortMonthYearString,
} from "./dateHelper";

describe("date helper function - getMonthFirstDay", () => {
  it("should return date-first day of month", () => {
    expect(getMonthFirstDay(new Date("2021-09-24")).toLocaleDateString()).toBe(
      new Date("2021-09-01").toLocaleDateString()
    );
  });
});

describe("date helper function - padWithZero", () => {
  it("should return string - number which is smaller than ten with pad 0", () => {
    expect(padWithZero(4)).toBe("04");
  });
});

describe("date helper function - getYearMonthDayString", () => {
  it("should return date string year-month-day", () => {
    expect(getYearMonthDayString(new Date("2021-09-01"))).toBe("2021-09-01");
  });
});

describe("date helper function - getTimeHourString", () => {
  it("should return time format - hh:mm", () => {
    expect(getTimeHourString(new Date("2021-09-01 6:00"))).toBe("06:00");
  });
});

describe("date helper function - addDay", () => {
  it("should return date with next day", () => {
    expect(addDay(new Date("2021-12-31")).toLocaleDateString()).toBe(
      new Date("2022-01-01").toLocaleDateString()
    );
  });
});

describe("date helper function - getWeekStartDate", () => {
  it("should return monday date in same week by given date", () => {
    expect(getWeekStartDate(new Date("2021-07-24")).toLocaleDateString()).toBe(
      new Date("2021-07-19").toLocaleDateString()
    );
  });
});

describe("date helper function - isPreviousMonth", () => {
  it("should return boolean if second date is lower by month", () => {
    expect(
      isPreviousMonth(new Date("2021-07-24"), new Date("2021-07-24"))
    ).toBe(false);
  });
});

describe("date helper function - isNextMonth", () => {
  it("should return boolean if second date is higher by month", () => {
    expect(isNextMonth(new Date("2021-12-24"), new Date("2022-01-24"))).toBe(
      true
    );
  });
});

describe("date helper function - isEqual", () => {
  it("should return boolean if two dates are equal", () => {
    expect(isEqual(new Date("2021-07-24"), new Date("2021-07-24"))).toBe(true);
  });
});

describe("date helper function - nextWeek", () => {
  it("should return date plus week", () => {
    expect(nextWeek(new Date("2021-08-21")).toLocaleDateString()).toBe(
      new Date("2021-08-28").toLocaleDateString()
    );
  });
});

describe("date helper function - previousWeek", () => {
  it("should return date minus week", () => {
    expect(previousWeek(new Date("2021-08-10")).toLocaleDateString()).toBe(
      new Date("2021-08-03").toLocaleDateString()
    );
  });
});

describe("date helper function - nextMonth", () => {
  it("should return next month start date", () => {
    expect(nextMonth(new Date("2021-08-31")).toLocaleDateString()).toBe(
      new Date("2021-09-01").toLocaleDateString()
    );
  });
});

describe("date helper function - previousMonth", () => {
  it("should return previous month start date", () => {
    expect(previousMonth(new Date("2021-08-10")).toLocaleDateString()).toBe(
      new Date("2021-07-01").toLocaleDateString()
    );
  });
});

describe("date helper function - getLongMonthYearString", () => {
  it("should return string of full month name and year ", () => {
    expect(getLongMonthYearString(new Date("2021-08-10"))).toBe("August 2021");
  });
});

describe("date helper function - getShorMonthYearString", () => {
  it("should return string of short month name and year ", () => {
    expect(getShortMonthYearString(new Date("2555-10-10"))).toBe("Oct 2555");
  });
});
