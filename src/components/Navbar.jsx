import React, { Fragment } from "react";
import bootstrap from "bootstrap";
import { NavLink } from "react-router-dom";

function Navbar(){

    return(
        <Fragment>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </ul>
        </Fragment>
    );
}

export default Navbar;