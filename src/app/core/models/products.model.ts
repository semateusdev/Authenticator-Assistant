export interface TypeProduct{
    id: string,
    name: string
}

export interface Product{
    id: string,
    name: string
    typeProduct: string
}
export interface request{
    type: string,
    producto: string
    name: string
}
