import { flightsConstants } from '../helpers/constants';

const initialState = {
    flights: [],
    loading: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case flightsConstants.FETCH_POPULAR_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case flightsConstants.FETCH_POPULAR_SUCCESS:
        return {
            ...state,
            loading: false,
            flights: action.payload.results,
        };

    case flightsConstants.FETCH_POPULAR_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
