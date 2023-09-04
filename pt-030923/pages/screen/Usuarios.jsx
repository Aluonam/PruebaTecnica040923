import React, { useState, useEffect} from 'react'

const Usuarios = () => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
        llamadaAPI()
    }, [])

    const llamadaAPI = async () => {
        try{
            const llamada = await fetch(`https://randomuser.me/api/?results=50`);
            const datos = await llamada.json();
            console.log(datos.results);
            setDatosAPI(datos.results)
        }catch(error) {"error detected", error}
    }
    

  return (
    <div>Usuarios</div>
  )
}

export default Usuarios