import { useReducer } from "react";
import BookingForm from "../components/BookingForm";

const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

const updateTimes = (state, action) => {
    // In a real app, you'd filter based on date. Here, we return the same list.
    return initializeTimes();
};

function Main() {
    const [availableTimes, dispatchTimes] = useReducer(updateTimes, initializeTimes());

    return (
        <main>
            <h2 style={{ textAlign: "center" }}>Reserve a Table</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}
            />
        </main>
    );
}

export default Main;
