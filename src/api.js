// src/api.js

// Returns mock time slots based on the date
export function fetchAPI(date) {
    const hours = ["17:00", "18:00", "19:00", "20:00", "21:00"];
    const random = Math.random();
    return random > 0.5 ? hours.slice(0, 3) : hours.slice(2);
}

// Always succeeds for now
export function submitAPI(formData) {
    console.log("Submitting to API:", formData);
    return true;
}
