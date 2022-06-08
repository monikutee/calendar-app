import * as fs from "fs";
import { toMatchImageSnapshot } from "jest-image-snapshot";
import { getLongMonthYearString, nextMonth } from "./helpers/dateHelper";

expect.extend({ toMatchImageSnapshot });

const setupInitialData = (data: Event[]) =>
  new Promise<void>((resolve, reject) => {
    fs.writeFile(
      "./database/user.json",
      JSON.stringify(data),
      //@ts-ignore
      (err: Error) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      }
    );
  });

describe("app", () => {
  beforeAll(async () => {
    await setupInitialData([]);
    await page.goto("http://localhost:1234/");
    await page.waitForSelector(".container");
  });

  it("should create event in week layout in the selected cell", async () => {
    const eventTitle = "event directly in cell";

    await page.waitForSelector('[data-cell="week-cell_4_15"]');
    const cell = await page.$('[data-cell="week-cell_4_15"]');
    await cell!.click();

    await page.waitForSelector("#create-event-modal");
    await page.type("#event-title", eventTitle);
    await page.click("#save-event");

    const title = await cell!.$('[data-title="event_title"]');
    expect(await title?.evaluate((node) => node.innerText)).toBe(eventTitle);
  });

  it("should open modal", async () => {
    await page.click("#create-event");
    const isModalVisible = await page.evaluate(() => {
      return document.getElementById("create-event-modal") ? true : false;
    });
    expect(isModalVisible).toBe(true);
  });

  it("should save event", async () => {
    await page.type("#event-title", "busy");
    await page.click("#save-event");

    const eventExist = await page.evaluate(() => {
      return document.querySelectorAll(".week_table-event").length === 2
        ? true
        : false;
    });
    expect(eventExist).toBe(true);
  });

  it("should navigate to month layout and change display date to next month", async () => {
    const currentMonthAndYear = await page.evaluate(() => {
      const span = document.getElementById("monthYear");
      return span ? span.innerText : null;
    });

    await page.select("#layoutSelector", "month");

    const cellDate = await page.evaluate(() => {
      const cell = document.querySelector("#selectMonth > div:nth-child(18)");
      //@ts-ignore
      return cell ? cell.children[0].dataset.date : null;
    });

    expect(currentMonthAndYear).toEqual(
      getLongMonthYearString(new Date(cellDate))
    );
    await page.click("#navbar_next");

    const newMonthAndYear = await page.evaluate(() => {
      const span = document.getElementById("monthYear");
      return span ? span.innerText : null;
    });

    expect(newMonthAndYear).toEqual(
      getLongMonthYearString(nextMonth(new Date(cellDate)))
    );
  });

  it("should render correctly week layout", async () => {
    await page.select("#layoutSelector", "week");
    async function goToPreviewMonth() {
      const currentMonthAndYear = await page.evaluate(() => {
        const span = document.getElementById("monthYear");
        return span ? span.innerText : null;
      });

      if (currentMonthAndYear === "August 2021") {
        return true;
      } else {
        await page.click("#navbar_previous");
        await goToPreviewMonth();
      }
    }

    await goToPreviewMonth();

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
  it("should render correctly month layout", async () => {
    await page.select("#layoutSelector", "month");
    async function goToPreviewMonth() {
      const currentMonthAndYear = await page.evaluate(() => {
        const span = document.getElementById("monthYear");
        return span ? span.innerText : null;
      });

      if (currentMonthAndYear === "August 2021") {
        return true;
      } else {
        await page.click("#navbar_previous");
        await goToPreviewMonth();
      }
    }

    await goToPreviewMonth();

    expect(await page.screenshot()).toMatchImageSnapshot();
  });
});
