import { useEffect, useState } from 'react';
import { getMyHours } from './services/hours'

interface HoursData {
  ra: string
  nome: string
  horas_formatadas: string
  horas_decimais: number
  ultimo_acesso: string
  base_atualizada_em: string
}

function App() {
    const [hours, setHours] = useState<HoursData | null>(null)

    useEffect(() => {
      async function loadHours() {
        try {
          const data = await getMyHours()

          console.log('Resposta da API:', data)

          setHours(data)
        }catch (error) {
          console.error('Erro ao consultar API:', error)
        }
      }

      loadHours()
    }, [])

    return (
      <div className='min-h-screen bg-black text-white flex items-center justify-center'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold mb-6'>
            Minhas Horas
          </h1>

          {hours ? (
            <div>
              <p className='text-2xl mb-2'>
                Olá, {hours.nome}
              </p>

              <p className='text-lg'>
                RA: {hours.ra}
              </p>

              <p className='text-5xl font-bold mt-6'>
                {hours.horas_formatadas}
              </p>

              <p className='text-lg'>
                Atualizado em: {hours.base_atualizada_em}
              </p>
            </div>
          ) : (
            <p>Consultando suas horas...</p>
          )}
        </div>
      </div>
    )
}

export default App