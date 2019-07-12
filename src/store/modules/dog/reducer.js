import { INIT_STATE, API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from "./constants";

export function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return { ...state, fetching: true, error: null };
        case API_CALL_SUCCESS:
            return { ...state, fetching: false, url: action.dog };
        case API_CALL_FAILURE:
            return { ...state, fetching: false, dog: null, error: action.error };
        default:
            return state;
    }
}
