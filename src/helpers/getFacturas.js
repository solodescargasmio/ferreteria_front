import { async } from "@firebase/util";

const getFacturas= async ()=>{
    const url="http://localhost:8080/factura";
    const res= await fetch(url);
    const inventarios = res.json();
    return inventarios;
}


const getFactura= async (facturaId)=>{
    const url="http://localhost:8080/factura/"+facturaId;
    const res= await fetch(url);
    const inventario = res.json();
    return inventario;
}

export { getFactura };

export default getFacturas;