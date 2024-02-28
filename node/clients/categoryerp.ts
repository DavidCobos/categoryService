import { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class CategoryERPClient extends ExternalClient {
    
    private readonly routes = {
        getCategoryPicture:( categoryId:string) => `/Category/GetCategoryImage/${categoryId}`
    }

  constructor(context: IOContext, options?: InstanceOptions) {
    super("https://privarsa.net/apivtex/api", context, {...options, headers:{
        "ApiKey": "CZKqJgcM7eEwNyexvLjW3JwEsVUoWA0TK8jcnhbyNTnOa48nXiWav5mxAOwy4Auq"
    }})
  }

  public async getCategoryPicture(categoryId: string): Promise<categoryImage> {
    const result = await this.http.get(this.routes.getCategoryPicture( categoryId))
    return result
  }
}