import { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class CategoryClient extends JanusClient {
    
    private readonly routes = {
        getCategoryTree:(accountName:string, categoryLevels:string) => `http://${accountName}.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/${categoryLevels}`
    }

  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {...options, headers:{
        VtexIdclientAutCookie: context.authToken
    }})
  }

  public async getCategoryTree(orderLevels: string): Promise<categoryTree> {
    const result = await this.http.get(this.routes.getCategoryTree(this.context.account, orderLevels))
    return result
  }
}