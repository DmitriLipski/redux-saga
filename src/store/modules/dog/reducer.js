import { INIT_STATE, API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } from "./constants";

export function reducer(state = INIT_STATE, action = {}) {
    switch (action.type) {
        case API_CALL_REQUEST:
            return handleRequest();
        case API_CALL_SUCCESS:
            return handleSuccess(state, action);
        case API_CALL_FAILURE:
            return handleFailure(state, action);
        default:
            return state;
    }
}

const handleRequest = (state) => ({
    ...state, fetching: true, error: null
});

const handleSuccess = (state, { payload }) => ({
    ...state, fetching: false, url: payload
});

const handleFailure = (state, { payload }) => ({
    ...state, fetching: false, url: null, error: payload
});



