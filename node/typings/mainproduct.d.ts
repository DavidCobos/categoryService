interface mainProductResponse {
    id: number
    nombre: string
    title: string
    imageUrl: string
    special: boolean
    url: string
}

interface Specification {
    key: string
    value: string
}

interface productSpecificationResponse {
    id: string
    specifications: Specification[]
}
