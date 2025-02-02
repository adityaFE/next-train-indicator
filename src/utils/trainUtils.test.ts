import { expect, test } from "vitest";
import { getUpcomingTrains } from "../utils/trainUtils";

test("returns at most 2 upcoming trains", () => {
    const trains = getUpcomingTrains(300);
    expect(trains.length).toBeLessThanOrEqual(2);
});

test("returns valid train objects", () => {
    const trains = getUpcomingTrains(300);
    trains.forEach((train) => {
        expect(train).toHaveProperty("destination");
        expect(train).toHaveProperty("arrivalIn");
        expect(typeof train.destination).toBe("string");
        expect(typeof train.arrivalIn).toBe("number");
    });
});

test("fetches expected trains at a given virtual time", () => {
    const trains = getUpcomingTrains(300);
    expect(trains.length).toBeGreaterThan(0);
});
