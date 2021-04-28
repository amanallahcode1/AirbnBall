import { csrfFetch } from './csrf';


export const LOAD_SPOTS = 'spots/GET_SPOTS';
export const LOAD_SPOT = 'spot/GET_SPOT';
export const ADD_SPOT = 'spot/ADD_SPOT';

const load = (spots) => {
    return {
        type: LOAD_SPOTS,
        payload: spots
    };
};

const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        payload: spot
    }
}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch('/api/spots');
    const data = await response.json();
    dispatch(load(data.spots));
    return data;
}

export const getOneSpot = (id) => async (dispatch) => {
    const numId = Number(id);
    const response = await csrfFetch(`/api/spots/${numId}`);
    const data = await response.json();
    dispatch(loadSpot(data.spot));
    return data
}


const initialState = {};

const spotsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_SPOTS: {
            newState = {};
            action.payload.forEach(spot => {
                newState[spot.id] = spot
            })
            return newState;
        }
        default:
            return state;
    }
};

export default spotsReducer;