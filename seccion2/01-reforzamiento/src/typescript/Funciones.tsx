import React from 'react'

export default function Funciones() {

  const sumar = (a:number, b:number)=>{
    return a + b 
  }
  return (
    <>
      <h3>Funciones</h3>
      <span>El resultado es <code>{sumar(5,9)}</code></span>
    </>
  )
}
