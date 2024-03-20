
export async function category(ctx:Context, next:() => Promise<categoryTree>) {
    const {clients: {category: CategoryClient}} = ctx
    const clientResponse = await CategoryClient.getCategoryTree("0")

    ctx.state.categoryTree = await clientResponse

    await next()
}

export async function subCategory(ctx:Context, next:() => Promise<categoryTree>) {
    const {
        vtex: {
            route: { params },
          },
        clients: {category: CategoryClient}
    } = ctx

    const clientResponse = await CategoryClient.getCategoryTree("1")
    ctx.state.categoryTree = await clientResponse

    const { categoryId } = params
    const codeNumber = parseInt(categoryId as string, 10)
    ctx.state.categoryId = codeNumber

    await next()
}