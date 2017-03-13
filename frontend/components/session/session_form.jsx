import React from 'react';
import { Link, withRouter } from 'react-router';
import SessionFormContainer from './session_form_container';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if(this.props.loggedIn) {
      this.props.router.push('/');
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  redirectLink() {
    if (this.props.formType === "login") {
      return <Link to="/signup">sign up instead.</Link>
    } else {
      return <Link to="/login">log in instead.</Link>
    }
  }

  renderErrors() {
    let errors = this.props.errors;
    if (errors === undefined || errors.length < 1) {
      return "";
    } else {
      return(
        <ul>
          {errors.map( (error, idx) => (
            <li key={`error-${idx}`}>
              {error}
            </li>
          ))}
        </ul>
      )
    }
  }

  render() {
    let formType = this.props.formType;

    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <p>Welcome to BenchBnB!</p>
          <br />
          <p>Please {formType} or {this.redirectLink()}</p>
          {this.renderErrors()}
          <div className="login-form">
            <label> Username:
              <input type="text"
                     value={this.state.username}
                     onChange={this.update("username")}
                     className="login-input" />
            </label>
            <br />
            <label> Password:
              <input type="password"
                     value={this.state.password}
                     onChange={this.update("password")}
                     className="login-input" />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </div>


        </form>
      </div>
    )
  }
};

export default SessionForm;
