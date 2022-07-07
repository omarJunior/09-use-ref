import React, { useRef } from 'react'

export const Formulario = () => {

  const nombreInput = useRef("")
  const apellidoInput = useRef("")
  const emailInput = useRef("")
  const miCaja = useRef()

  const mostrar = (e)=>{
    e.preventDefault()
    console.log(nombreInput.current.value)
    console.log(apellidoInput.current.value)
    console.log(emailInput.current.value)

    //mi caja
    let { current: caja } = miCaja
    caja.classList.add("fondoVerde")
    caja.innerHTML = "Formulario enviado"

    console.log(miCaja)

  }

  return (
    <div>
        <h1>Formulario</h1>
        <div ref={miCaja} className="miCaja">
            Mi caja con useRef
        </div>

        <form onSubmit={mostrar}>
            <input 
              type="text" 
              placeholder='Nombre'
              ref={nombreInput}/>
            <input 
              type="text" 
              placeholder='Apellidos'
              ref={apellidoInput}/>
            <input 
              type="email" 
              placeholder='Correo'
              ref={emailInput}/>

            <input type="submit" value="Enviar info"/>
        </form>
        <br/>
        <button onClick={()=> nombreInput.current.select()}>Rellenar form</button>
    </div>
  )
}
