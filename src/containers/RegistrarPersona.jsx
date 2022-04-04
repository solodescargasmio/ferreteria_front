import React from 'react'

const RegistrarPersona = () => {
  return (
    <div className='container'>
    <form>
<div className="form-group">
  <label htmlFor="formGroupExampleInput2">Nombre</label>
  <input type="text" className="form-control" id="nombre" placeholder="Nombre "/>
</div>
<div className="form-group">
  <label htmlFor="formGroupExampleInput">Tipo</label>
  <select>
      <option>Cliente</option>
      <option>Proveedor</option>
  </select>
</div>
<div className="form-group">
  <label htmlFor="formGroupExampleInput2">Celular</label>
  <input type="text" className="form-control" id="minimo" placeholder="Celular"/>
</div>
<div className="form-group">
  <label htmlFor="formGroupExampleInput2">Documento de Identidad</label>
  <input type="text" className="form-control" id="maximo" placeholder="Documento de Identidad"/>
</div>
<div className="form-group">
  <button classname='btn btn-primary'>Enviar</button>
</div>
</form>
    </div>
  )
}

export default RegistrarPersona