import { async } from "@firebase/util";

const getFactura = async (facturaId)=>{
    const url="http://localhost:8080/factura/"+facturaId;
    const res= await fetch(url);
    const factura = await res.json();
    return factura;
     //inventario;
}

const getFacturas = async ()=>{
    const url="http://localhost:8080/factura/";
    const res= await fetch(url);
    const factura = await res.json();
    return factura;
     //inventario;
}
export {getFacturas};

export default getFactura;