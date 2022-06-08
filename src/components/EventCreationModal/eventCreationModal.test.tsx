/**
 * @jest-environment jsdom
 */
import * as React from "react";
import fetchMock from "jest-fetch-mock";

import { cleanup, render, waitFor, fireEvent } from "@testing-library/react";
import { EventCreationModal } from "./";

describe("eventCreationModal", () => {
  afterEach(async () => {
    cleanup();
  });

  beforeEach(async () => {
    fetchMock.enableMocks();
    fetchMock.resetMocks();
    render(<EventCreationModal />);
    await waitFor(() =>
      expect(document.getElementById("create-event-modal")).toBeTruthy()
    );
  });

  it("should show title error", async () => {
    fireEvent.click(document.getElementById("save-event")!);
    await waitFor(() =>
      expect(document.getElementById("title-error-message")).toBeTruthy()
    );
  });

  it("should show title and dateerror", async () => {
    const startTime: HTMLInputElement = document.querySelector(
      ".create-event_modal-event-timeInput-start"
    )!;

    const endTime: HTMLInputElement = document.querySelector(
      ".create-event_modal-event-timeInput-end"
    )!;

    fireEvent.change(endTime, {
      target: {
        value: startTime.value,
      },
    });

    fireEvent.click(document.getElementById("save-event")!);
    await waitFor(() =>
      expect(
        document.getElementById("date-error-message") &&
          document.getElementById("title-error-message")
      ).toBeTruthy()
    );
  });

  it("should return created event object", async () => {
    const startTime: HTMLInputElement = document.querySelector(
      ".create-event_modal-event-timeInput-start"
    )!;

    const endTime: HTMLInputElement = document.querySelector(
      ".create-event_modal-event-timeInput-end"
    )!;

    const startDay: HTMLInputElement = document.querySelector(
      ".create-event_modal-event-dateInput-start"
    )!;

    const event = {
      id: 6,
      title: "busy",
      startDate: new Date("2021-09-09 15:00"),
      endDate: new Date("2021-09-09 18:00"),
    };

    fireEvent.change(document.getElementById("event-title")!, {
      target: {
        value: event.title,
      },
    });

    fireEvent.change(startDay, {
      target: {
        value: "2021-09-09",
      },
    });

    fireEvent.change(startTime, {
      target: {
        value: "15:00",
      },
    });

    fireEvent.change(endTime, {
      target: {
        value: "18:00",
      },
    });

    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve([]);
    });

    fireEvent.submit(document.getElementById("event-form")!);

    expect(fetch).toHaveBeenCalled();
  });
});
