import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart = products => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        const savedProduct = getStoredCart()
        const storedCart = [];
        if (products.length) {
            for (const key in savedProduct) {
                const addedProduct = products.find(product => product.key === key)
                if (addedProduct) {
                    const quantity = savedProduct[key];
                    addedProduct.quantity = quantity
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart)

        }
    }, [products])
    return [cart, setCart];
}

export default useCart;