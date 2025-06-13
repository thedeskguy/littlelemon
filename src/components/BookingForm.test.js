import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

// Dummy props to prevent errors
const mockProps = {
    availableTimes: ["17:00", "18:00"],
    dispatchTimes: jest.fn(),
};

test("renders the BookingForm heading", () => {
    render(<BookingForm {...mockProps} />);
    const heading = screen.getByText("Reserve Your Table");
    expect(heading).toBeInTheDocument();
});
