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

function formatDate(dateString: string): string {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) return dateString

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`
}

function App() {
  const [hours, setHours] = useState<HoursData | null>(null)

  useEffect(() => {
    async function loadHours() {
      try {
        const data = await getMyHours()

        console.log('Resposta da API:', data)

        setHours(data)
      } catch (error) {
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
              Atualizado em: {formatDate(hours.base_atualizada_em)}
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