import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListUnit from './ListUnit';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    
   // this.props.history.replace('/login')

  }

  render() {
    var that = this;
      
      return (
        <Router>
  
         <div class="container">
          <div  class="d-flex justify-content-center">
            <div class="w-75 card-group" onClick={that.handleClick}>
            <div class="card" >
              <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <Link class="btn btn-primary"  to="/login">Let's study</Link>

              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>

            </div>

            </div>
            
        </div>
      
        <div  class="d-flex justify-content-center">
        <div class="w-75 card-group">
        <div class="card">
          <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        <div class="card">
          <img src="https://miro.medium.com/max/1010/1*EPHVYygppZ2py-HQ57CSqA.jpeg" class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
        </div>
        </div>
      </div>
      <Route  path="/login"  component={ListUnit} />
      {/* <Route  path="/"  component={Home} /> */}

     </Router> 
  
  
      )
    
 
  
    
      
    

  }
     
  
}
  

// export default Home;
export default  withRouter(Home);
