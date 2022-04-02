
import Logo from './assets/img/logo.png'
import React,{Component} from 'react'
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom'
import {auth} from './firebase/credentials'
import Login from './containers/Login';
import Conexion from './config/Conexion';

function App() {
  return (
    <div className="div-welcome">
      <img src={Logo} alt="" />
      <h1>Reto final - Client Side</h1>
      <Login />

      <Conexion />
    </div>
  );
}

export default App;
