
Prueba técnica:
	https://randomuser.me/  

•	Listar 50 usuarios en una tabla con los siguientes cambios:
    o	Nombre + apellidos  usando literal string {`${----} ${----}`}
    --> <td>{`${elementoActual.name.first} ${elementoActual.name.last}`}</td>
    o	Edad
    o	Genero
    o	Fecha de registro
    o	Detalles un botón 

•	El detalle de usuarios debe abrir un modal de ANT que muestre los siguientes campos:
    o	Imagen
    o	Username
    o	Password

•	Crearemos fuera de la tabla dos botones en la parte superior que nos permitan filtrar por hombre o por mujer lo que se muestra en la tabla.
Para reusar el mismo useState de la screen en la funcion llamadaAPI especificamos que es un objeto {} (no un array []) y asi podemos desdoblar los datos: 

```javascript
setDatosAPI({originData:datos.results,showData:datos.results})
```

en el componente filtros
```javascript
const Filtros = ({datosAPI, setDatosAPI}) => {

  const handleFiltroMujeres = () => {
    // const copyOriginArray = structuredClone(datosAPI.originData)
    const filterData  = datosAPI.originData.filter((elemento)=>elemento.gender === "female")

    setDatosAPI({...datosAPI,showData:filterData})
  }

  return (
    <>
    <button onClick={()=>{handleFiltroMujeres()}}>Mujeres</button>```

•	BONUS: añade un temporizador en la parte superior que muestre la hora actual