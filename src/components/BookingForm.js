import React from 'react'

export default function BookingForm() {
    return (
        <section className="booking-section">
            <h2>Book a Table</h2>
            <form className="booking-form">
                <label>
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label>
                    Date:
                    <input type="date" name="date" required />
                </label>
                <label>
                    Time:
                    <input type="time" name="time" required />
                </label>
                <label>
                    Guests:
                    <input type="number" name="guests" min="1" max="10" required />
                </label>
                <button className="button" type="submit">Reserve</button>
            </form>
        </section>
    )
}
