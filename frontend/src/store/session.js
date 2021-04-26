// uses router.post(
//     '/',

// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const SET_USER_UPLOAD ='session/setUserUpload'

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

// const setUserUpload = (user) => {
//   return {
//     type: SET_USER_UPLOAD,
//     payload: user,
//   }
// }

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,

    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signUpUser = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
  method: "POST",
  body: JSON.stringify({
    username,
    email,
    password,
  }),
});
const data = await response.json();
dispatch(setUser(data.user));
return response;
}

export const createUser = (user) => async (dispatch) => {
  const { images, image, username, email, password } = user;
  const formData = new FormData();
  formData.append("username", username);
  formData.append("email", email);
  formData.append("password", password);
  // for single file
  if (image) formData.append("image", image);

  const res = await csrfFetch(`/api/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: formData,
  });

  const data = await res.json();
  dispatch(setUser(data.user));
};

export const logOutUser = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: 'DELETE'
  })
  dispatch(removeUser())
  return response;
}

export const restoreUser = () => async (dispatch) => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};



const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

//!testing login route with thunk
// window.store.dispatch(window.sessionActions.login({
//     credential: 'Demo-lition',
//     password: 'password'
//   }));

//!testing loout route with thunk
// window.store.dispatch(window.sessionActions.logout());

export default sessionReducer;