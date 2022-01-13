export interface Product {
    uid: string
    name: string
    imageURLs: string[]
    price: number
    stock: number
    createdAt: string
    updatedAt: string
}

export interface ProductResponse {
    content: Product[]
}

