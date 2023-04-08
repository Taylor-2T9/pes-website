import type { NextApiRequest, NextApiResponse } from 'next'
import * as XLSX from 'xlsx'
import path from 'path'
import { paginate } from '@/utils/array'
import { Collection, Element } from '@/interfaces/api/data'

type Data = Collection[]

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const file_path = path.resolve('src/assets/data.xlsx')
  const workbook = await XLSX.readFile(file_path)
  const data = [
    {
      name: 'players',
      label: 'Membros',
      content: [] as Element[][]
    },
    {
      name: 'teams',
      label: 'Times',
      content: [] as Element[][]
    },
    {
      name: 'chars',
      label: 'Jogadores',
      content: [] as Element[][]
    }
  ]

  for (const type of data) {
    const sheet = workbook.Sheets[type.label]
    const typeData: Element[] = XLSX.utils.sheet_to_json(sheet)
    typeData.sort(function (a: Element, b: Element) {
      return b.Titulos - a.Titulos
    })
    const pages = paginate(typeData, 8)
    type.content = pages
  }

  res.status(200).json(data)
}
