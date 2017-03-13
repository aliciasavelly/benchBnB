import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT_SUCCESS, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {currentUser: null, errors: []};

const SessionReducer = (state = _nullUser, action) => {
  // debugger;
  Object.freeze(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      console.log(merge({}, state, { currentUser }));
      return merge({}, state, { currentUser });
    case RECEIVE_LOGOUT_SUCCESS:
      console.log(merge({}, state));
      return merge({}, state);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      console.log(merge({}, state, { errors }));
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
