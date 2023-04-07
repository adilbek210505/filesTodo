export interface IProduct {
    id?: number,
    title: string
    image: string
    category: string
    description: string
    price: number
    rating: {
        rate: number
        count: number
    }
}

export interface IValue {
    title: string
    price?: any
    description: string
}

export interface IFile {
    id: number
    title: string
    image: string | ArrayBuffer | any
}