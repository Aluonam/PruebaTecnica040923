import Filtros from '@/components/Filtros'
import ListaDatosUsuarios from '@/components/ListaDatosUsuarios'
import React, { useState, useEffect} from 'react'

const Usuarios = () => {

    const [datosAPI, setDatosAPI] = useState({})

    useEffect(() => {
        llamadaAPI()
    }, [])

    const llamadaAPI = async () => {
        try{
            const llamada = await fetch(`https://randomuser.me/api/?results=15`);
            const datos = await llamada.json();
            // console.log("resultados",datos.results);
            // setDatosAPI(datos.results)
            
            setDatosAPI({originData:datos.results,showData:datos.results})
            //convertir en objeto para reusar el mismo useState
        }catch(error) {"error detected", error}
    }
    

  return (
    <>
    <div>Usuarios</div>
    <Filtros datosAPI={datosAPI} setDatosAPI={setDatosAPI}></Filtros>
    <ListaDatosUsuarios datosUsuario={datosAPI.showData}></ListaDatosUsuarios>
    </>
  )
}

export default Usuarios