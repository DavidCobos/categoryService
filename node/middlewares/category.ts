
export async function category(ctx:Context, next:() => Promise<categoryTree>) {
    const {clients: {category: CategoryClient}} = ctx
    const clientResponse = await CategoryClient.getCategoryTree("0")

    ctx.state.categoryTree = await clientResponse

    await next()
}