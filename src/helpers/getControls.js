import { async } from "@firebase/util";

const getControls = async () => {
    const url="http://localhost:8080/control";
    const res= await fetch(url);
    const control= await res.json();
return control;
}

const getControl = async (controlId) => {
    const url="http://localhost:8080/control/"+controlId;
    const res= await fetch(url);
    const control= await res.json();
return control;
}

export { getControl };
export default getControls;