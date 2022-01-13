export interface Article {
    uid: string
    name: string
    stock: number
    createdAt: string
    updatedAt: string
}

export interface ArticleResponse {
    content: Article[]
}

