const postVolante=(control)=>{

    fetch(`http://localhost:8080//control`,{
        method:'POST',
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

    }).then(data => data).catch(error=>console.log("ERROR EN EL POST VOLANTE "+error));
}


const putVolante=(control)=>{

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

}).then(data => data).catch(error=>console.log("ERROR EN EL PUT VOLANTE "+error));
}


export { postVolante };

export default putVolante;