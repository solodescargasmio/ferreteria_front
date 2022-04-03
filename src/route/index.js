import { BrowserRouter , Route,Routes} from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../containers/Dashboard";
import Login from "../containers/Login";
import Register from "../containers/Register";

function Ruta(){
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </BrowserRouter>

    )
}

export default Ruta;