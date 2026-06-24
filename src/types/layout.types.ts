import { type IconSvgElement } from '@hugeicons/react'

export interface SubPage {
  label: string
  path: string
}

export interface NavItem {
  label: string
  path?: string
  icon: IconSvgElement
  subPages?: SubPage[]
}

export interface NavSectionGroup {
  items: NavItem[]
}

export type NavConfig = {
  items: NavItem[]
}[]
