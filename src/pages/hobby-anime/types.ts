export interface IListItem {
  id: string
  allowEdit?: boolean
  image: string
  w: number
  h: number
  title: string
  desc: string
}

export enum TabNameEnum {
  love = '真爱无敌',
  hot = '热血燃作',
  sport = '运动治愈',
  classic = '经典佳作',
  other = '其他推荐',
}


