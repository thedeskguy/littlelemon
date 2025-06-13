import { fetchAPI } from "./api";

export const initializeTimes = () => {
    return []; // initialization now handled in useEffect
};

export const updateTimes = (state, action) => {
    if (action.type === "UPDATE_TIMES") {
        return fetchAPI(new Date(action.date));
    }
    return state;
};
