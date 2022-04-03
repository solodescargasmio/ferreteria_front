import { useState,useEffect } from "react";
import getFactura from '../helpers/getFacturas';
import getControls from "../helpers/getControls";

const initialFactura=[{
    id:"3fb4a822-3dae-5",
proveedor:"Corralon Este",
listaInventario:[],
Fecha:'2022-03-20T03:00:00.000+00:00',
documento:"38765432"
}]

export default function TraerFacturas(){
    const [factura,setFactura] = useState([]);
    

    const facturaUpdate = async()=>{
       getControls()
       .then((newControl=>{
           setFactura({...factura,newControl})
    }));
       
    }

    useEffect(()=>{
        facturaUpdate();
    },[]);

    return(
        <div>
            <h2>Facturas</h2>
            <h5>ID  :</h5>
                <ul>

                </ul>
                 


            <button onClick={()=>facturaUpdate}>Cargar</button>
        </div>
    )
}