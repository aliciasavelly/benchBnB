import { connect } from 'react-redux';
import { requestLogin, requestSignup } from '../../actions/session_actions';

const mapStateToProps = ({ session }) => ({
  loggedIn: !!session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // debugger;
  const formType = ownProps.location.pathname;
  const processForm = (formType === "login") ? requestLogin : requestSignup;
  return {
    processForm: (user) => dispatch(processForm(user))
  };
};
