
type Parameter = {
    fetch: any,
    params: any
}

export const load = ({fetch, params}:Parameter) => {
    console.log(params)
    const fetchProduct = async (id:number) => {
        const product = await fetch(`https://dummyjson.com/products/${id}`)
        const res = await product.json()
        return res
    }

    return {
        product: fetchProduct(params.productId)
    }
}