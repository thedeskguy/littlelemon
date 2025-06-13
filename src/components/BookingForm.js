import { useState } from "react";
import { submitAPI } from "../api";

function BookingForm({ availableTimes, dispatchTimes, submitForm }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    // Track if field was touched
    const [touched, setTouched] = useState({
        name: false,
        email: false,
        guests: false,
        date: false,
        time: false,
    });

    const handleBlur = (field) => {
        setTouched({ ...touched, [field]: true });
    };

    // Validation logic
    const errors = {
        name: name.trim() === "" ? "Name is required" : "",
        email: !email.includes("@") ? "Invalid email" : "",
        guests: guests < 1 ? "Must be at least 1 guest" : "",
        date: date === "" ? "Date is required" : "",
        time: time === "" ? "Time is required" : "",
    };

    const isFormValid = Object.values(errors).every((err) => err === "");

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatchTimes({ type: "UPDATE_TIMES", date: selectedDate });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, email, guests, date, time };

        if (!isFormValid) {
            alert("Please fix the errors before submitting.");
            return;
        }

        submitForm(formData); // delegate to Main
    };

    return (
        <section className="form-container">
            <h2>Reserve Your Table</h2>

            <form onSubmit={handleSubmit} className="booking-form">
                {/* Name */}
                <label htmlFor="res-name">Full Name</label>
                <input
                    type="text"
                    id="res-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => handleBlur("name")}
                    required
                />
                {touched.name && errors.name && <p className="error">{errors.name}</p>}

                {/* Email */}
                <label htmlFor="res-email">Email</label>
                <input
                    type="email"
                    id="res-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onBlur={() => handleBlur("email")}
                    required
                />
                {touched.email && errors.email && <p className="error">{errors.email}</p>}

                {/* Guests */}
                <label htmlFor="res-guests">Number of Guests</label>
                <input
                    type="number"
                    id="res-guests"
                    value={guests}
                    min="1"
                    max="10"
                    onChange={(e) => setGuests(Number(e.target.value))}
                    onBlur={() => handleBlur("guests")}
                    required
                />
                {touched.guests && errors.guests && <p className="error">{errors.guests}</p>}

                {/* Date */}
                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    onBlur={() => handleBlur("date")}
                    required
                />
                {touched.date && errors.date && <p className="error">{errors.date}</p>}

                {/* Time */}
                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    onBlur={() => handleBlur("time")}
                    required
                >
                    <option value="">-- Select a time --</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>
                {touched.time && errors.time && <p className="error">{errors.time}</p>}

                {/* Submit */}
                <button className="button" type="submit" disabled={!isFormValid}>
                    Book Now
                </button>
            </form>
        </section>
    );
}

export default BookingForm;
