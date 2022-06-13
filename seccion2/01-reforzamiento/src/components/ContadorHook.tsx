import React, { useState } from 'react'
import useCounter from '../hooks/useCounter';

export default function ContadorHook() {
 

  const {valor, acumular} = useCounter();

  return (
    <div>
      <h3>Contador. HOOK <small>{valor}</small></h3>
      <button className='btn btn-primary' onClick={()=> acumular(1)}> +1 </button>
      &nbsp;
      <button className='btn btn-danger' onClick={()=> acumular(-1)}> -1 </button>
    </div>
  )
}
