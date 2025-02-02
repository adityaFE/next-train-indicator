import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import '@testing-library/jest-dom';
import VirtualTimeDisplay from "./VirtualDisplay";

test("displays correct virtual time", () => {
    render(<VirtualTimeDisplay virtualTime={300} />);
    expect(screen.getByText(/Current Time: 5:00/i)).toBeInTheDocument();
});

test("displays correct formatted time", () => {
    render(<VirtualTimeDisplay virtualTime={720} />);
    expect(screen.getByText(/Current Time: 12:00/i)).toBeInTheDocument();
});
