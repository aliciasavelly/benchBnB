import { RECEIVE_CURRENT_USER, RECEIVE_LOGOUT_SUCCESS, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {currentUser: null, errors: []};

const SessionReducer = (state = _nullUser, action) => {
  // debugger;
  Object.freeze(state);
  // console.log(state);
  // console.log(state);

  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      // console.log(merge({}, state, { currentUser }));
      console.log("receive current user");
      return merge({}, state, { currentUser });
    case RECEIVE_LOGOUT_SUCCESS:
      // console.log(merge({}, state));
      console.log("receive logout success");
      return merge({}, state);
    case RECEIVE_ERRORS:
      let errors = action.errors;
      // console.log(merge({}, state, { errors }));
      console.log("receive errors");
      return merge({}, state, { errors });
    default:
      return state;
  }
};

export default SessionReducer;
