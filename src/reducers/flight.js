import flightsConstants from '../helpers/constants';

const initialState = {
    flights: [],
    origins: [],
    destinies: [],
    times: [],
    loading: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
    case flightsConstants.SAVE_RESERVATION:
        return {
            ...state,
            flights: state.flights.concat(action.payload),
        };

    case flightsConstants.DELETE_RESERVATION:
        return { ...state, flights: state.flights.filter((item) => item.id !== action.payload) };

    case flightsConstants.FETCH_ORIGIN_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case flightsConstants.FETCH_ORIGIN_SUCCESS:
        return {
            ...state,
            loading: false,
            origins: action.payload,
        };

    case flightsConstants.FETCH_ORIGIN_ERROR:
        return { ...state, loading: false, error: action.payload };

    case flightsConstants.FETCH_DESTINY_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case flightsConstants.FETCH_DESTINY_SUCCESS:
        return {
            ...state,
            loading: false,
            destinies: action.payload,
        };

    case flightsConstants.FETCH_DESTINY_ERROR:
        return { ...state, loading: false, error: action.payload };

    case flightsConstants.FETCH_TIME_BEGIN:
        return {
            ...state,
            loading: true,
            error: '',
        };

    case flightsConstants.FETCH_TIME_SUCCESS:
        return {
            ...state,
            loading: false,
            times: action.payload,
        };

    case flightsConstants.FETCH_TIME_ERROR:
        return { ...state, loading: false, error: action.payload };

    default:
        return state;
    }
};
