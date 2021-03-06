import React from 'react'
import { postControl } from '../helpers/postControls'



const handleSubmit=(e)=>{
    
    const control={
        idItem:e.target.codigo.value,
        producto:e.target.nombre.value,
        cantidad:e.target.cantidad.value,
        minimo:e.target.minimo.value,
        maximo:e.target.maximo.value
    }
    postControl(control);
}

const AgregarProducto = () => {
  return (
    <div className='container'>
        <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Codigo Producto</label>
      <input type="text" className="form-control" id="codigo" placeholder="Codigo "/>
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Nombre Producto</label>
      <input type="text" className="form-control" id="nombre" placeholder="Nombre "/>
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Cantidad</label>
      <input type="text" className="form-control" id="cantidad" placeholder="Cantidad"/>
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Minimo</label>
      <input type="text" className="form-control" id="minimo" placeholder="Minimo"/>
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput2">Maximo</label>
      <input type="text" className="form-control" id="maximo" placeholder="Maximo"/>
    </div>
    <div className="form-group">
      <button classname='btn btn-primary'>Enviar</button>
    </div>
  </form>
  </div>
  )
}

export default AgregarProducto