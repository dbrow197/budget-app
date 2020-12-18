import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Visual1 from '../Visual1';
import Visual2 from '../Visual2';
import Visual3 from '../Visual3';
import InputExpense from '../InputExpense';

import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
render() {
    const { user } = this.props.auth;
return (
  <div className="App">  
   <b>Hey there,</b> {user.name.split(" ")[0]}
  <Router>  
    <div className="container">  
      <div className="row" >  
        <div className="col-sm-12 btn btn-dark bottom-buffer">  
          Dashboard
      </div>  
          
      <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={this.onLogoutClick}
              className="nav-link btn btn-secondary"
            >
              Logout
            </button>
      </div>  
      
      <div className="container-fluid row center top-buffer">   
       <div className="col-sm-2">  
        </div>  
        <div className="col-sm-3">  
          <Link to={'/Visual1'} className="nav-link btn btn-secondary">Pie</Link>  
        </div>  
        <div className="col-sm-3">  
          <Link to={'/Visual2'} className="nav-link btn btn-secondary">Bar</Link>  
        </div> 
        <div className="col-sm-3">  
          <Link to={'/Visual3'} className="nav-link btn btn-secondary">Line </Link>  
        </div>     
        <div className="col-sm-2">  
        </div>
        
      </div>  
    </div>  
    <div className="container-fluid row center top-buffer">  
      <Switch>  
        <Route path='/Visual1' component={Visual1} />  
        <Route path='/Visual2' component={Visual2} />    
        <Route path='/Visual3' component={Visual3} />  
      </Switch>  
    </div>  
  </Router>  
 
  <div className="text-box jumbotron">
              <InputExpense/>
 
            </div>
 
</div> 
    );

  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);