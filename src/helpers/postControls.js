import { Axios } from "axios";

const postControl=(control)=>{

       fetch(`http://localhost:8080/control/`,{
            method:'POST',
            mode: 'cors',
            credentials: 'same-origin', 
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                idItem:control.idItem,
                producto:control.producto,
                cantidad:control.cantidad,
                maximo:control.maximo,
                minimo:control.minimo,
            })
    
        }).then(data => data).catch(error=>console.log("Error Post "+error));
       
        
    }


const putControl=(control)=>{

    fetch(`http://localhost:8080//control${control.id}`,{
        method:'PUT',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            id:control.id,
            idItem:control.idItem,
            producto:control.producto,
            cantidad:control.cantidad,
            maximo:control.maximo,
            minimo:control.minimo

        })

    }).then(data => data).catch(error=>console.log("ERROR EN EL PUT CONTROL "+error));
}


export { postControl };

export default putControl;