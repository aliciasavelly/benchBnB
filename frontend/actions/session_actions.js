import { signup, login, logout } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_LOGOUT_SUCCESS = "RECEIVE_LOGOUT_SUCCESS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => dispatch => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveLogoutSuccess = () => dispatch => ({
  type: RECEIVE_LOGOUT_SUCCESS
});

export const receiveErrors = error => dispatch => ({
  type: RECEIVE_ERRORS,
  error
});

export const requestLogin = currentUser => dispatch => {
  return login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  );
};

export const requestLogout = () => dispatch => {
  return logout().then(
    () => dispatch(receiveLogoutSuccess())
  );
};

export const requestSignup = currentUser => dispatch => {
  return signup(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser))
  ).fail(
    error => dispatch(receiveErrors(error.responseJSON))
  );
};
