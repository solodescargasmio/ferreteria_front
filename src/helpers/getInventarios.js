import { async } from "@firebase/util";

const getInventarios = async () => {
    const url="http://localhost:8080/inventario";
    const res= await fetch(url);
    const inventarios= await res.json();
return inventarios;
}

const getInventario = async (inventarioId) => {
    const url="http://localhost:8080/inventario/"+inventarioId;
    const res= await fetch(url);
    const inventarios= await res.json();
return inventario;
}

export { getInventario };
export default getInventarios;
