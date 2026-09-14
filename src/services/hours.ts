import { api } from './api'

export interface HoursResponse {
    ra: string
    nome: string
    horas_formatadas: string
    horas_decimais: number
    ultimo_acesso: string
    base_atualizada_em: string
}

export async function getMyHours() {
    const response = await api.get<HoursResponse>('/api/v1/hours')

    return response.data
}