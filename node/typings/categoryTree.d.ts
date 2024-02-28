type categoryTree = category[]

interface category {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: Children[]
  Title: string
  MetaTagDescription: string
}

interface Children {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: any[]
  Title: string
  MetaTagDescription: string
}