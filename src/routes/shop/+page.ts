/** @type {import('./$types').PageLoad} */

export const load = async () => {

    const productShopItems = async () => {
        const productItems = await fetch('https://dummyjson.com/products?limit=10') 
        const productsRes = await productItems.json();
        return productsRes.products
        
    }   

    return {
        productShopItems: productShopItems() 
    }
}