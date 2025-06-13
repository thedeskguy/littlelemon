export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export const updateTimes = (state, action) => {
    // Future: could filter based on action.date
    return initializeTimes();
};
