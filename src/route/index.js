import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Dashboard from "../containers/Dashboard";
import Error404 from "../containers/Error404";
import Navbar from "../components/Navbar";
import AgregarProducto from "../containers/AgregarProducto";
import CrearVolante from "../containers/CrearVolante";
import AgregarPersona from "../containers/AgregarPersona";

export default function Ruta(){
    return(
        <BrowserRouter>
            <Navbar />
             <Routes>
                <Route exact path="/" element={<Dashboard />}>Homa</Route>
                    <Route exact path="/login" element={<Login />}>Login</Route>
                    <Route exact path="/register" element={<Register />}>Register</Route>
                    <Route exact path="/volante" element={<CrearVolante />}>Crear Volante</Route>
                    <Route exact path="/producto" element={<AgregarProducto />}>Agregar Producto</Route>
                    <Route exact path="/persona" element={<AgregarPersona />}>Agregar Persona</Route>
                    <Route path="*" element={<Error404 />}>404 Not Found</Route>
            </Routes>
            
            
                
        </BrowserRouter>
    )
}
