import * as APIUtil from '../util/session_api_util';

export const LOGIN_USER = 'LOGIN_USER';
export const LOUGOUT_USER = 'LOUGOUT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (user) => ({
  type: LOGIN_USER,
  data: user
});

export const receiveSessionErrors = (errors) => (
  {
    type: RECEIVE_ERRORS,
    data: errors
  }
)

export const login = (user) => dispatch => {
APIUtil.postNewSession(user).then(user => (dispatch(receiveCurrentUser(user)), errors => (dispatch(receiveSessionErrors(errors))))
}
