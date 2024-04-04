export async function categoryerp(ctx:Context, next:() => Promise<categoryResponse[]>) {

    const {clients: {categoryerp: CategoryERPClient}, state:{categoryTree, categoryId}} = ctx

    let subCategory:categoryTree = categoryTree 
    if (categoryId > 0){
        subCategory = categoryTree.find((element) => element.id == categoryId)?.children ?? [];
    }
    
    const clientResponse = subCategory.map(async element => {

        const resultC = await CategoryERPClient.getCategoryPicture(element.id.toString())
        let url = resultC.imageUrl;

        switch (element.id) {
            case 224043:
                url = 'https://privarsa.net/imagesfamily/5/Componentes-para-moldes.jpg'
                break;
            
            case 224080:
                url = 'https://privarsa.net/imagesfamily/6/sistemas-de-enfriamiento.jpg'
                break;

            case 224081:
                url = 'https://privarsa.net/imagesfamily/9/Equipos-para-moldeadores.jpg'
                break;
            
            case 9313:
                url = 'https://privarsa.net/imagesfamily/1/Portamoldes-y-Placas-de-acero.jpg'
                break;

            case 3:
                url = 'https://privarsa.net/imagesfamily/3/Controles-de-temperatura.jpg'
                break;

            case 9289:
                url = 'https://privarsa.net/imagesfamily/4/Resistencias-y-Termopares.jpg'
                break;

            case 9282:
                url = 'https://privarsa.net/imagesfamily/7/Equipos-de-pulido.jpg'
                break;

            case 9314:
                url = 'https://privarsa.net/imagesfamily/8/Soldadura-laser-y-Micro-TIG.jpg'
                break;


            case 9285:
                url = 'https://privarsa.net/imagesfamily/18/Elementos-de-izaje.jpg'
                break;
            
            case 9318:
                url = 'https://privarsa.net/imagesfamily/19/Limpieza-y-mantenimiento-de-moldes.jpg'
                break;

            case 9321:
                url = 'https://privarsa.net/imagesfamily/22/Automatizacion.jpg'
                break;
            
            case 9322:
                url = 'https://privarsa.net/imagesfamily/23/Cables-y-Conectores-Electricos.jpg'
                break;

            case 9323:
                url = 'https://privarsa.net/imagesfamily/24/Equipos-para-moldeadores.jpg'
                break;

            case 9326:
                url = 'https://privarsa.net/imagesfamily/25/Limpieza-de-moldes.jpg'
                break;

            case 9327:
                url = 'https://privarsa.net/imagesfamily/26/Equipos-para-moldeadores.jpg'
                break;

            case 9329:
                url = 'https://privarsa.net/imagesfamily/28/Compuestos-purgantes.jpg'
                break;
                
            case 9332:
                url = 'https://privarsa.net/imagesfamily/32/Equipos-Perifericos.jpg'
                break;

            default:
                break;
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