import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class ListUnit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <Router>
      <div class="container">
        <p>AaaaaaaaAaaaaaaaAaaaaaaaAaaaaaaaAaaaaaaaAaaaaaaa</p>
     
  </div>
  {/* <Route path="/public" component={Public} />
  <Route path="/login" component={ListUnit} /> */}
   </Router> 
    )}
  
}
  

export default ListUnit;
