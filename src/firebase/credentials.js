// acá colocas las credenciales de Firebase


// Importe las funciones que necesita de los SDK que necesita
import { initializeApp } from "firebase/app";


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

export default firebaseApp
/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLfgYKgpzyJP1y6gtK32yMmI2dnkuTuMs",
  authDomain: "reactsofkaferreteria.firebaseapp.com",
  projectId: "reactsofkaferreteria",
  storageBucket: "reactsofkaferreteria.appspot.com",
  messagingSenderId: "99814436089",
  appId: "1:99814436089:web:2b22a021345811fc1e4628"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);*/