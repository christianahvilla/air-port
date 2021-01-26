import flightsConstants from '../helpers/constants';

// ---------------------- Fetch --------------------------------------------------
const deleteReservation = (id) => ({
    type: flightsConstants.DELETE_RESERVATION,
    payload: id,
});

const saveReservation = (flight) => ({
    type: flightsConstants.SAVE_RESERVATION,
    payload: flight,
});

const fetchOriginBegin = () => ({
    type: flightsConstants.FETCH_ORIGIN_BEGIN,
});

const fetchOriginSuccess = (response) => ({
    type: flightsConstants.FETCH_ORIGIN_SUCCESS,
    payload: response.data,
});

const fetchOriginError = (response) => ({
    type: flightsConstants.FETCH_ORIGIN_ERROR,
    payload: response.data,
});

const fetchDestinyBegin = () => ({
    type: flightsConstants.FETCH_DESTINY_BEGIN,
});

const fetchDestinySuccess = (response) => ({
    type: flightsConstants.FETCH_DESTINY_SUCCESS,
    payload: response.data,
});

const fetchDestinyError = (response) => ({
    type: flightsConstants.FETCH_DESTINY_ERROR,
    payload: response.data,
});

const fetchTimeBegin = () => ({
    type: flightsConstants.FETCH_TIME_BEGIN,
});

const fetchTimeSuccess = (response) => ({
    type: flightsConstants.FETCH_TIME_SUCCESS,
    payload: response.data,
});

const fetchTimeError = (response) => ({
    type: flightsConstants.FETCH_TIME_ERROR,
    payload: response.data,
});

const flightActions = {
    saveReservation,
    deleteReservation,
    fetchOriginBegin,
    fetchOriginSuccess,
    fetchOriginError,
    fetchDestinyBegin,
    fetchDestinySuccess,
    fetchDestinyError,
    fetchTimeBegin,
    fetchTimeSuccess,
    fetchTimeError,
};

export default flightActions;
