import React from 'react';

import {
  Link
} from "react-router-dom";

function Menu() {
  return (


    
    <nav className= "form-group grey darken-2">
    
    <div className="nav-link btn btn-secondary" aria-label="navigation menu">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/members">Members</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="https://github.com/dbrow197/personal_budget_final.git">Project Repo</a></li>
        </ul>
    </div>
</nav>
  );
}

export default Menu;
