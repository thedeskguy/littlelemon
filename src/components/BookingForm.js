import { useState } from "react";

function BookingForm({ availableTimes, dispatchTimes }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [guests, setGuests] = useState(1);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !date || !time || guests < 1) {
            alert("Please fill in all fields correctly.");
            return;
        }

        console.log("Booking submitted:", { name, email, guests, date, time });
        setSubmitted(true);

        // Reset form
        setName("");
        setEmail("");
        setGuests(1);
        setDate("");
        setTime("");
    };

    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setDate(selectedDate);
        dispatchTimes({ type: "UPDATE_TIMES", date: selectedDate }); // Trigger update
    };

    return (
        <section className="form-container">
            <h2>Reserve Your Table</h2>

            {submitted && (
                <div className="confirmation-message">
                    🎉 Thank you, {name}! Your reservation for {guests} guest(s) on {date} at {time} has been received.
                </div>
            )}

            <form onSubmit={handleSubmit} className="booking-form">
                <label htmlFor="res-name">Full Name</label>
                <input
                    type="text"
                    id="res-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="res-email">Email</label>
                <input
                    type="email"
                    id="res-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <label htmlFor="res-guests">Number of Guests</label>
                <input
                    type="number"
                    id="res-guests"
                    value={guests}
                    min="1"
                    max="10"
                    onChange={(e) => setGuests(e.target.value)}
                    required
                />

                <label htmlFor="res-date">Choose Date</label>
                <input
                    type="date"
                    id="res-date"
                    value={date}
                    onChange={handleDateChange}
                    required
                />

                <label htmlFor="res-time">Choose Time</label>
                <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                >
                    <option value="">-- Select a time --</option>
                    {availableTimes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                    ))}
                </select>

                <button className="button" type="submit">Book Now</button>
            </form>
        </section>
    );
}

export default BookingForm;
