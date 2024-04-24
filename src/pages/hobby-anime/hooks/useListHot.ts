import { hot1, hot2 } from '../mock/index'
import type { IListItem } from '../types'

function getMockHot1(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hot1), 555)
  })
}

function getMockHot2(): Promise<Array<IListItem>> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(hot2), 555)
  })
}

export async function useListHot1(): Promise<IListItem[]> {
  return await getMockHot1()
}

export async function useListHot2(): Promise<IListItem[]> {
  return await getMockHot2()
}
