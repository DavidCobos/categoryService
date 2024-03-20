export async function categoryerp(ctx:Context, next:() => Promise<categoryResponse[]>) {

    const {clients: {categoryerp: CategoryERPClient}, state:{categoryTree, categoryId}} = ctx

    let subCategory:categoryTree = categoryTree 
    if (categoryId > 0){
        subCategory = categoryTree.find((element) => element.id == categoryId)?.children ?? [];
    }
    
    const clientResponse = subCategory.map(async element => {

        const resultC = await CategoryERPClient.getCategoryPicture(element.id.toString())

        let catRes:categoryResponse = {
            id: element.id,
            nombre: element.name,
            title: element. Title,
            imageUrl: resultC.imageUrl,
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