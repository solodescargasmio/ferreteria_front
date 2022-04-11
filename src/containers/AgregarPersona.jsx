import React,{ useState } from 'react'
import { postControl } from '../helpers/postControls'
import { postPersona } from '../helpers/postPersona';
import jsPDF from 'jspdf';



const handleSubmit=(e)=>{
  e.preventDefault();
    const persona={
        id:e.target.id.value,
        nombre:e.target.nombre.value,
        documento:e.target.documento.value,
        celular:e.target.celular.value,
        tipo:e.target.tipo.value

    }
   // crearPdf(persona);
    if((e.target.id.value!='undefined')&&(e.target.id.value!='')){alert("Ejecutaste modificar "+e.target.id.value)}
    else{alert("Ejecutaste enviar "+e.target.id.value)}
   // postPersona(persona);
   // alert("Ejecutaste la funcion del servidor")
}

function crearPdf(persona){
  var doc = new jsPDF('landscape','px','a4', 'false');
      
  doc.text(20, 20, 'Personas')

  doc.setFont('helvetica')
  doc.text(20, 60, 'Prueba PDF')

  doc.setFont('bold')
  doc.text(20, 80, persona.documento)   
  
  doc.setFont('bold')
  doc.text(20, 100, persona.nombre) 
  doc.setFont('bold')
  doc.text(20, 120, persona.tipo) 

  
  doc.save('persona.pdf')
}

const AgregarPersona = () => {

  const [check,setCheck] = useState(false)
  
  const mostrarNuevo = (e)=>{
    setCheck(e.target.checked)
  }
  const [idP,setIdP] = useState("")
const modificar = (e)=>{
  
}
  return (
  <div className='container'>

    <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Documento de identidad</label>
          <input type="text" className="form-control" id="documento" placeholder="Documento " required="required"/>
        </div>
        <div className="form-group col-lg-10">
          <label htmlFor="formGroupExampleInput2">Nombre </label>
          <input type="text" className="form-control" id="nombre" placeholder="Nombre " required="required"/>
        </div>
        <div className="form-group col-lg-10">
          <label htmlFor="formGroupExampleInput">Celular o Telefono de contacto</label>
          <input type="text" className="form-control" id="celular" placeholder="Celular o Telefono de contacto" required="required"/>
        </div>
        <div className="form-group ">
          <label htmlFor="formGroupExampleInput">Tipo</label>
          <select id='tipo'>
            <option value="Proveedor">Proveedor</option>
            <option value="Cliente">Cliente</option>
          </select>
        </div>
        <div className="form-group">

        </div>
        {
        check ?
        <div className="form-group" >
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">ID Persona</label>
            <input type="text" className="form-control" id="id" placeholder="ID Persona"
             onChange={(e)=>setIdP(e.target.value)}/>
          </div>
          <button className='btn btn-primary'>Modificar</button>
          <button type="button" onClick={modificar}>Eliminar</button>
        </div>
        :
        <div className="form-group">
          <button className='btn btn-primary'>Enviar</button>
        </div>
        }
        <div className="form-group">
        <label htmlFor="formGroupExampleInput">Modificar/Eliminar</label>
          <input type="checkbox"  name="nuevo" id="nuevo" onChange={mostrarNuevo}/>
        </div>
      
    </form>
  </div>
  )
}

export default AgregarPersona;