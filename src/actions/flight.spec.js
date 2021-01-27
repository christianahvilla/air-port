import flightActions from './flight';
import flightConstants from '../helpers/constants';

describe('Flight Actions', () => {
    describe('Origin', () => {
        it('fetOriginBegin', () => {
            const expectedAction = {
                type: flightConstants.FETCH_ORIGIN_BEGIN,
            };
            expect(flightActions.fetchOriginBegin()).toEqual(expectedAction);
        });
        it('fetcOriginSuccess', () => {
            const response = {
                data: {
                    origin: ['CDMX'],
                },
            };
            const expectedAction = {
                type: flightConstants.FETCH_ORIGIN_SUCCESS,
                payload: response.data,
            };
            expect(flightActions.fetchOriginSuccess(response)).toEqual(expectedAction);
        });
        it('fetcOriginError', () => {
            const response = {
                data: 'Network Error',
            };
            const expectedAction = {
                type: flightConstants.FETCH_ORIGIN_ERROR,
                payload: response.data,
            };
            expect(flightActions.fetchOriginError(response)).toEqual(expectedAction);
        });
    });

    describe('Destiny', () => {
        it('fetDestinyBegin', () => {
            const expectedAction = {
                type: flightConstants.FETCH_DESTINY_BEGIN,
            };
            expect(flightActions.fetchDestinyBegin()).toEqual(expectedAction);
        });
        it('fetcDestinySuccess', () => {
            const response = {
                data: {
                    destiny: ['Cancun', 'GDL'],
                },
            };
            const expectedAction = {
                type: flightConstants.FETCH_DESTINY_SUCCESS,
                payload: response.data,
            };
            expect(flightActions.fetchDestinySuccess(response)).toEqual(expectedAction);
        });
        it('fetcDestinyError', () => {
            const response = {
                data: 'Network Error',
            };
            const expectedAction = {
                type: flightConstants.FETCH_DESTINY_ERROR,
                payload: response.data,
            };
            expect(flightActions.fetchDestinyError(response)).toEqual(expectedAction);
        });
    });

    describe('Time', () => {
        it('fetTimeBegin', () => {
            const expectedAction = {
                type: flightConstants.FETCH_TIME_BEGIN,
            };
            expect(flightActions.fetchTimeBegin()).toEqual(expectedAction);
        });
        it('fetcTimeSuccess', () => {
            const response = {
                data: {
                    time: ['12-12-2021 9:61:21', '12-12-2021 9:61:21'],
                },
            };
            const expectedAction = {
                type: flightConstants.FETCH_TIME_SUCCESS,
                payload: response.data,
            };
            expect(flightActions.fetchTimeSuccess(response)).toEqual(expectedAction);
        });
        it('fetcTimeError', () => {
            const response = {
                data: 'Network Error',
            };
            const expectedAction = {
                type: flightConstants.FETCH_TIME_ERROR,
                payload: response.data,
            };
            expect(flightActions.fetchTimeError(response)).toEqual(expectedAction);
        });
    });

    describe('Reservation', () => {
        it('saveReservation', () => {
            const flight = {
                id: 1,
                origin: 'CDMX',
                destiny: 'GDL',
                time: '12-12-2021 9:61:21',
                people: 5,
            };
            const expectedAction = {
                type: flightConstants.SAVE_RESERVATION,
                payload: flight,
            };
            expect(flightActions.saveReservation(flight)).toEqual(expectedAction);
        });
        it('deleteReservation', () => {
            const id = 1;
            const expectedAction = {
                type: flightConstants.DELETE_RESERVATION,
                payload: id,
            };
            expect(flightActions.deleteReservation(id)).toEqual(expectedAction);
        });
    });
});
