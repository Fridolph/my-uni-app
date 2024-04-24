import { classic1, classic2 } from '../mock/index'
import type { IListItem } from '../types'

function getMockClassic1(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(classic1), 555)
  })
}

function getMockClassic2(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(classic2), 555)
  })
}

export async function useListClassic1(): Promise<IListItem[]> {
  return await getMockClassic1()
}

export async function useListClassic2(): Promise<IListItem[]> {
  return await getMockClassic2()
}
