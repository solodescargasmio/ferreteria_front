// acá colocas las credenciales de Firebase


// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import Home from '../containers/Dashboard';
// Configuración de Firebase de tu aplicación web
const firebaseConfig = {
  apiKey: "AIzaSyCLfgYKgpzyJP1y6gtK32yMmI2dnkuTuMs",
  authDomain: "reactsofkaferreteria.firebaseapp.com",
  projectId: "reactsofkaferreteria",
  storageBucket: "reactsofkaferreteria.appspot.com",
  messagingSenderId: "99814436089",
  appId: "1:99814436089:web:2b22a021345811fc1e4628"
};

// Inicializamos a Firebase
const firebaseApp = initializeApp(firebaseConfig);
// export default firebaseApp;
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
export { auth };
export default firebaseApp ;
export const signInWithGoogle = ()=>{

  signInWithPopup(auth, provider)
  .then((result)=>{
    const name = result.user.displayName
    const email = result.user.email
    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
  }).catch((error)=>{
    console.log("ERROR "+error)
  });

}
export const cerrarSesion = ()=>{
  auth.signOut();
  getAuth().signOut();
  localStorage.clear();
}
