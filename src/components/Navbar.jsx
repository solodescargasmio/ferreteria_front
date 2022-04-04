import React, { Fragment } from "react";
import '../assets/styles/components/navbar.scss';
import { Link,NavLink } from "react-router-dom";

function Navbar(){

    return(
        <Fragment>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/volante">Crear Volante</NavLink></li>
            <li><NavLink to="/producto">Agregar Productos</NavLink></li>
            
          </ul>
        </Fragment>
    );
}

export default Navbar;