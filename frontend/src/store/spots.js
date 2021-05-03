import { csrfFetch } from './csrf';


export const LOAD_SPOTS = 'spots/GET_SPOTS';
export const LOAD_SPOT = 'spot/GET_SPOT';
export const ADD_SPOT = 'spot/ADD_SPOT';

const load = (spots) => {
    return {
        type: LOAD_SPOTS,
        spots
    };
};

const loadSpot = (spot) => {
    return {
        type: LOAD_SPOT,
        spot
    }
}

export const getSpots = () => async (dispatch) => {
    const response = await csrfFetch(`/api/search`);
    const data = await response.json();
    dispatch(load(data.allDestinations));
    return data;
    
   
}

export const getOneSpot = (id) => async (dispatch) => {
    const numId = Number(id);
    const response = await csrfFetch(`/api/search/${numId}`);
   
    const data = await response.json();
    dispatch(loadSpot(data.oneDest));
    
   
    return data
}



const spotsReducer = (state = {all: [], current:{}} , action) => {
    let newState;
     let spot;
    switch (action.type) {
    case LOAD_SPOTS: {
      const newState = {}
      const allListings = []
      for (let i = 0; i<10; i++) {
          let listing = action.spots[i];
          allListings.push(listing)
      }
   
      newState.all=allListings
      newState.current = {...state.current}
      return newState
    }
        default:
            return state;
    }
};

export default spotsReducer;