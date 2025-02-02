import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import NextTrainIndicator from "./NextTrainIndicator";

test("renders NextTrainIndicator component", () => {
    render(<NextTrainIndicator />);
    expect(screen.getByText(/Next Trains/i)).toBeInTheDocument();
});
