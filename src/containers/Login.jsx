import React from "react";
import bootstrap from "bootstrap";

function Login(){
    return (
      <>
        <div>
          <img src="" alt="" />
        </div>
        <form action="">
          <div  className="form-control">
            <label htmlFor="">
                Ingresa E-mail
                <input type="text" />
            </label>
          </div> 
          <div  className="form-control">
            <label htmlFor="">
                Ingresa Contraseña
                <input type="password" className="form-control"/>
            </label>
            </div>  
            <input type="submit" value="Ingresar" className="btn btn-primary"/>
        </form>
        
      </>
    );
}


export default Login