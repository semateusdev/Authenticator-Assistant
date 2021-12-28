export interface TypeProduct{
    id: string,
    name: string    
    enabledLock?: boolean
}

export interface Product{
    id: string,
    name: string
    typeProduct: string
    enabledLock: boolean
}
export interface request{
    type: string,
    producto: string | string[]
    name: string
    PM?: boolean
    authReq: string
    autResult: string
}
