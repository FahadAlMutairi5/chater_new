import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionCreators from "./store/actions";
import logo from './assets/fat.png';

class SingUp extends Component {
  state = {
    username: "",
    password: ""
  };
      /* -- set all info to user singup -- */
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    return this.props.signup(this.state, this.props.history);
  };
  render() {
    const errors = this.props.errors;
    return (
        <div className="animated slideInRight col-6 my-3 shadow rounded text-center" style={{height: "35rem",backgroundColor:"rgba(200,223,241,0.2)"}}>
          <br/>
          <div className="mt-0">
          {!!errors.length ? (   
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {errors.map(error => (
                 <p key={error}>{error}</p>
               ))}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            ):
            <img style={{width:"12rem"}} src={logo} className="animated rotateIn rounded" alt="..."/>
          }
          <h1>Singup</h1>
            <form onSubmit={this.submitHandler}>
              <div className="form-group text-left">
                <h5 className="ml-2">User Name</h5>
                <input 
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler} 
                className="form-control rounded-pill"/>
              </div>
              <div className="form-group text-left">
                <h5 className="ml-2">Password</h5>
                <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
                className="form-control rounded-pill"/>
              </div>
              <button type="submit" className="btn btn-primary rounded-pill">Singup</button>
            </form>
          </div>
        </div>
    );
  }
}
const mapStateToProps = state => {
  return { 
    user: state.auth.user,
    errors: state.errors.errors
 };
};
const mapDispatchToProps = dispatch => {
  return {
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history)),
  };
};
export default connect(mapStateToProps,mapDispatchToProps)(SingUp);
