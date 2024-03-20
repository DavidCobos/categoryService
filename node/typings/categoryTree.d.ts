type categoryTree = category[]

interface category {
  id: number
  name: string
  hasChildren: boolean
  url: string
  children: category[]
  Title: string
  MetaTagDescription: string
}