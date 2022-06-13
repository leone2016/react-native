import React from 'react'

export default function TiposBasicos() {

  const nombre: string = "Leonardo";
  const edad = 30;
  const estaActivo = true;
  const poderes = ['velocidad', 'Volar', 'Respirar'];

  return (
    <div>
      <h3>TIPOS BÁSICOS</h3>
      {nombre} - { edad }
      <br />
      {poderes.join(', ')}
    </div>
  )
}
