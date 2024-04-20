export enum TabbarEnum {
  home = 'home',
  uv = 'uv',
  demo = 'demo',
  hobby = 'hobby',
  resume = 'resume',
}

export interface ITabItem {
  name: string
  text: string
  icon?: string
}
