import React, { Fragment } from "react";
import '../assets/styles/components/navbar.scss';
import { Link,NavLink } from "react-router-dom";
import Logo from "../assets/img/logo.png";


function Navbar(){

    return(
        <Fragment>
          {/* <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/volante">Crear Volante</NavLink></li>
            <li><NavLink to="/producto">Agregar Productos</NavLink></li>
            
          </ul> */}
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* <nav class="navbar navbar-light bg-light">
          <NavLink to="/">Home</NavLink><span className="sr-only">(current)</span>
          </nav> */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/">Home</NavLink><span className="sr-only">(current)</span>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/login">Login</NavLink>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/register">Registrar</NavLink>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/volante">Crear Volante</NavLink>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/producto">Agregar Productos</NavLink>
            </div>
          </nav>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <NavLink to="/persona">Agregar Personas (Cliente/Proveedor)</NavLink>
            </div>
          </nav>
          <h6>{localStorage.getItem("email")}</h6>
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">
    <img src={Logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
  </a>
  
  <h4>{localStorage.getItem("name")}
  </h4>
 
</nav>
</nav>

        </Fragment>
    );
}

export default Navbar;