import { async } from "@firebase/util"

const getVolantes= async ()=>{
    const url="http://localhost:8080/volante"
    const res = await fetch(url);
    const volantes = await res.json();
    return volantes;
}

const getVolante= async (volanteId)=>{
    const url="http://localhost:8080/volante/"+volanteId;
    const res = await fetch(url);
    const volante = await res.json();
    return volante;
}


export { getVolante };
export default getVolantes