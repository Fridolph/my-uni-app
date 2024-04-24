import { other1, other2 } from '../mock/index'
import type { IListItem } from '../types'

function getMockOther1(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(other1), 555)
  })
}

function getMockOther2(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(other2), 555)
  })
}

export async function useListOther1(): Promise<IListItem[]> {
  return await getMockOther1()
}

export async function useListOther2(): Promise<IListItem[]> {
  return await getMockOther2()
}
