import { sport1, sport2 } from '../mock/index'
import type { IListItem } from '../types'

function getMockSport1(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sport1), 555)
  })
}

function getMockSport2(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(sport2), 555)
  })
}

export async function useListSport1(): Promise<IListItem[]> {
  return await getMockSport1()
}

export async function useListSport2(): Promise<IListItem[]> {
  return await getMockSport2()
}
