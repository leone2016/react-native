import React from 'react'
import Contador from './components/Contador'
import Funciones from './typescript/Funciones'
import ObjetosLiterales from './typescript/ObjetosLiterales'
import TiposBasicos from './typescript/TiposBasicos'
import './index.css'
import ContadorHook from './components/ContadorHook';
import Login from './components/Login'
export default function App() {
  return (
    <div className='mt-2'>Introducción a TS - react
    <h1 className='title'>Repaso Hooks</h1>
    <Login/>
    <hr />
    <ContadorHook/>
    <hr />
    <Contador/>
    <h1 className='title'>Repaso TS</h1>
    <hr />
    <Funciones/>
    <hr />
    <ObjetosLiterales/>
    <hr />
    <TiposBasicos/>
    </div>
  )
}
