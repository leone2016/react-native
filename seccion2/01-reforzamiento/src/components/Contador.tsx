import React, { useState } from 'react'

export default function Contador() {
  const [valor, setValor] = useState(0);


  const acumular = ( numero: number)=>{
    setValor(valor+numero)
  }

  

  return (
    <div>
      <h3>Contador. <small>{valor}</small></h3>
      <button className='btn btn-primary' onClick={()=> acumular(1)}> +1 </button>
      &nbsp;
      <button className='btn btn-danger' onClick={()=> acumular(-1)}> -1 </button>
    </div>
  )
}
