import React from 'react'

const postPersona = (persona) => {
  
    fetch(`http://localhost:8080/persona/`,{
        method:'POST',
        mode: 'cors',
        credentials: 'same-origin', 
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            documento:persona.documento,
            nombre:persona.nombre,
            celular:persona.celular,
            tipo:persona.tipo,
        })
        

    }).then(data => data).catch(error=>window.alert("Error Post "+error))
    .then(window.alert("La persona se guardo con exito"));
   
    
}


const putPersona=(persona)=>{

fetch(`http://localhost:8080//persona${persona.id}`,{
    method:'PUT',
    headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        id:persona.id,
        documento:persona.documento,
        nombre:persona.nombre,
        celular:persona.celular,
        tipo:persona.tipo,
        })

}).then(data => data).catch(error=>console.log("ERROR EN EL PUT CONTROL "+error));
}


export { postPersona };

export default putPersona;
