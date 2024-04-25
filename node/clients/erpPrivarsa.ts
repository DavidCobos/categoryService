import { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export default class ERPPrivarsaClient extends ExternalClient {
    
    private readonly routes = {
        getCategoryPicture:( categoryId:string) => `/VtexIOService/GetCategoryImage/${categoryId}`,
        getMainProducts:( familysubId:string) => `/VtexIOService/GetMainProducts/${familysubId}`,
        getProductSpecification:( mainProductId:string) => `/VtexIOService/GetProductSpecifications/${mainProductId}`,
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

  public async getMainProducts(familysubId: string): Promise<mainProductResponse[]> {
    const result = await this.http.get(this.routes.getMainProducts( familysubId))
    return result
  }

  public async getProductSpecification(mainProductId: string): Promise<productSpecificationResponse[]> {
    const result = await this.http.get(this.routes.getProductSpecification( mainProductId))
    return result
  }
}