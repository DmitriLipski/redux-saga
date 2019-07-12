import { API_CALL_REQUEST } from "./constants";

export function fetchDog() {
    return {
        type: API_CALL_REQUEST,
    };
}
