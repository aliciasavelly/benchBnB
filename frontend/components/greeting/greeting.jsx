import React from 'react';
import { Link } from 'react-router';

const Greeting = ({ currentUser, logout }) => {
  // let currentUser = this.props.currentUser;
  // debugger;
  if (currentUser) {
    return(
      <div>
        <h2>Welcome to benchBnb, {currentUser.username}!</h2>
        <button onClick={logout}>Log Out</button>
      </div>
    )
  } else {
    return(
      <div>
        <h2>Welcome to benchBnb!</h2>
        <Link to='/login'>Log In</Link>
        <br />
        <Link to='/signup'>Sign Up</Link>
      </div>
    )
  }
};

export default Greeting;
