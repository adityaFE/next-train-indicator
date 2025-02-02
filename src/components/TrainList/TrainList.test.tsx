import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import TrainList from "./TrainList";

test("renders train list with provided trains", () => {
    const mockTrains = [
        { destination: "Central Station", arrivalIn: 5 },
        { destination: "West Market", arrivalIn: 10 },
    ];

    render(<TrainList trains={mockTrains} />);

    expect(screen.getByText(/Central Station/i)).toBeInTheDocument();
    expect(screen.getByText(/5 min/i)).toBeInTheDocument();
    expect(screen.getByText(/West Market/i)).toBeInTheDocument();
    expect(screen.getByText(/10 min/i)).toBeInTheDocument();
});
