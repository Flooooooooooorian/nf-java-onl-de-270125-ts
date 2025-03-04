export type Product = {
    id: string | number,
    name: string,
    price: number,
    description?: string,
    //description: string | undefined,
    amount: number
}


export type Order = {
    id: string,
    status: Status
    products: Product[]
}

export type Status = "OPEN" | "IN_PROGRESS" | "COMPLETED"

const myStatus: Status = "COMPLETED"

// type ProductDto = {
//     name: string,
//     price: number,
//     description: string,
//     amount: number
// }

export type ProductDto = Omit<Product, "id">
