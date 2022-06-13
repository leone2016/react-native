
interface Persona {
  nombreCompleto: string,
  edad: number,
  direccion: Direccion,
  email?: string
}

interface Direccion {
  pais: string,
  casaNo: string
}

export default function ObjetosLiterales() {

  const persona: Persona = {
    nombreCompleto: 'Leonardo',
    edad: 30,
    direccion: {
      pais: 'Ecuador',
      casaNo: 'N60c-119'
    }
  }

  return (
    <div><h3>ObjetosLiterales</h3>
    <code>
      <pre>
        {JSON.stringify(persona, null, 2)}
      </pre>
    </code>
    </div>
  )
}
