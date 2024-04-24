import { love1, love2 } from '../mock/index'
import type { IListItem } from '../types'

function getMockLove1(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(love1), 555)
  })
}

function getMockLove2(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(love2), 555)
  })
}

export async function useListLove1(): Promise<IListItem[]> {
  return await getMockLove1()
}

export async function useListLove2(): Promise<IListItem[]> {
  return await getMockLove2()
}
