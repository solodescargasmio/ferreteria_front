
import Logo from './assets/img/logo.png'
import {auth} from './firebase/credentials'
import {signInWithGoogle,cerrarSesion} from './firebase/credentials';
import './assets/styles/botonGoogle.scss'
import Ruta from './route/' 

function App() {
  return (
    <div className="div-welcome">
      {
        
      
      !auth.user
      ?<button type="button" class="login-with-google-btn"  onClick={signInWithGoogle}>Iniciar con Google</button>
      :<button class="login-with-google-btn" onClick={cerrarSesion}>Cerrar Sesion</button>}
      <Ruta />
      <img src={Logo} alt="" />
      <h1>Reto final - Client Side</h1>
 
      
      {/* <TraerFacturas /> */}
      {/* <Conexion /> */}
    </div>
  );
}

export default App;
