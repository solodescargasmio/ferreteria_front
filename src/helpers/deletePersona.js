import React from 'react'

 const deletePersona=(id)=> {
  fetch(`http://localhost:8080/persona/${id}`, { method: 'DELETE' })
  .then(data => data).catch(error=>window.alert("Error Delete "+error))
  .then(window.alert("La persona se eliminó con exito"));
}


export default deletePersona;