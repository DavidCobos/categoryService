export async function getFamilies(ctx:Context, next:() => Promise<categoryResponse[]>) {

    const {clients: {categoryerp: ERPPrivarsaClient}, state:{categoryTree, categoryId}} = ctx

    let subCategory:categoryTree = categoryTree 
    if (categoryId > 0){
        subCategory = categoryTree.find((element) => element.id == categoryId)?.children ?? [];
    }
    
    const clientResponse = subCategory.map(async element => {

        const resultC = await ERPPrivarsaClient.getCategoryPicture(element.id.toString())

        let url = resultC.imageUrl
        if(!url){
            url = 'https://privarsa.vtexassets.com/assets/vtex/assets-builder/privarsa.b2bstore-privarsa/0.0.8/logos/Logo-Privarsa-1___531eda977635168aeea4ef41d82c58f3.png'
        }
        
        let catRes:categoryResponse = {
            id: element.id,
            nombre: element.name,
            title: element. Title,
            url: element.url,
            imageUrl: url,
            special: resultC.special
        }

        return catRes
    });

    let categorias:categoryResponse[] = []

    await Promise.all(clientResponse).then((respuesta) => categorias = respuesta)
    
    ctx.status = 200
    ctx.body = {
        categorias
    }

    await next()
}

export async function getMainProducts(ctx:Context, next:() => Promise<mainProductResponse[]>) {
    const {
        vtex: {
            route: { params },
          },
        clients: {categoryerp: ERPPrivarsaClient}
    } = ctx

    const { familysubId } = params
    const strFamilysubId = familysubId as string

    const mainProduts = await ERPPrivarsaClient.getMainProducts(strFamilysubId)
    ctx.status = 200
    ctx.body = {
        mainProduts
    }

    await next()

}