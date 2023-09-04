import React from 'react'

const Filtros = ({datosAPI, setDatosAPI}) => {

  const handleFiltroMujeres = () => {
    const filterData  = datosAPI.originData.filter((elemento)=>elemento.gender === "female")
    setDatosAPI({...datosAPI,showData:filterData})
  }

  const handleFiltroHombres = () => {
    const filterData  = datosAPI.originData.filter((elemento)=>elemento.gender === "male")
    setDatosAPI({...datosAPI,showData:filterData})
  }

  return (
    <>
    <div>
    <button onClick={()=>{handleFiltroMujeres()}}>Mujeres</button>
    <button onClick={()=>{handleFiltroHombres()}}>Hombres</button>
    <button onClick={()=>{setDatosAPI({...datosAPI,showData:datosAPI.originData})}}>Todos</button>
    </div>

    
    </>
  )
}

export default Filtros