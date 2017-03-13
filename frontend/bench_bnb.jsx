import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

//to delete
// import { requestSignup, requestLogin, requestLogout } from './actions/session_actions';
// window.signup = requestSignup;
// window.login = requestLogin;
// window.logout = requestLogout;
import { fetchBenches } from './util/bench_api_util';
window.fetchBenches = fetchBenches;
//

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  // window.store = configureStore();
  // window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
