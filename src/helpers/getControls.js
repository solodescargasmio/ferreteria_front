import { async } from "@firebase/util";

const getControl = async (controlId)=>{
    const url="http://localhost:8080/control/"+controlId;
    const res= await fetch(url);
    const control = await res.json();
    return control;
     //inventario;
}

const getcontrols = async ()=>{
    const url="http://localhost:8080/control/";
    const res= await fetch(url);
    const control = await res.json();
    return control;
     //inventario;
}
export {getcontrols};

export default getcontrol;