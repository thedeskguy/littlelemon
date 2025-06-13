import { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../availableTimesReducer";
import { fetchAPI, submitAPI } from "../api";

function Main() {
    const [availableTimes, dispatchTimes] = useReducer(updateTimes, []);
    const navigate = useNavigate();

    useEffect(() => {
        const today = new Date();
        const times = fetchAPI(today);
        dispatchTimes({ type: "UPDATE_TIMES", date: today });
    }, []);

    const submitForm = (formData) => {
        const success = submitAPI(formData);
        if (success) {
            navigate("/confirmation"); // ✅ Go to confirmation page
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <main>
            <h2 style={{ textAlign: "center" }}>Reserve a Table</h2>
            <BookingForm
                availableTimes={availableTimes}
                dispatchTimes={dispatchTimes}
                submitForm={submitForm} // ✅ pass submit function
            />
        </main>
    );
}

export default Main;
