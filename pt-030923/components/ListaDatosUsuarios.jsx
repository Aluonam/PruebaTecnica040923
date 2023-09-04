import React from 'react'
import BotonDetalles from './BotonDetalles'

const ListaDatosUsuarios = ({datosUsuario}) => {
 // habría puesto otro nombre al componente ya que va a crear una Tabla


        //interrogacion antes del map porque al poner useState como objeto {} le preguntas va a llegar un array con datos? y si le llega hace el .map
    const tabla = datosUsuario?.map(( elementoActual )=>{

        const fechaRegistro = elementoActual.registered.date.split("T")[0]
        // console.log(fechaRegistro);
        return(
            <tr>
                <td>{`${elementoActual.name.first} ${elementoActual.name.last}`}</td>
                <td>{elementoActual.dob.age}</td>
                <td>{elementoActual.gender}</td>
                <td>{fechaRegistro}</td>
                <td><BotonDetalles usuario={elementoActual}></BotonDetalles></td>
            </tr>
        )
    })

     

  return (
    <>
    <div>ListaDatosUsuarios</div>
    <table>
        <thead>
            <tr>
                <th>Nombre + apellidos</th>
                <th>Edad</th>
                <th>Genero</th>
                <th>Fecha de registro</th>
                <th>Botón</th>
            </tr>
        </thead>
        <tbody>
                {tabla}
        </tbody>
    </table>
    </>
  )
}

export default ListaDatosUsuarios