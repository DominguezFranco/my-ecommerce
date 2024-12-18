import { createContext, useState } from "react";

const cartContext = createContext();

const CartProvider = ( { children }) => {
    const [cart, setCart] = useState([]);

    const addProductInCart = (newPruduct) => {
        const tempCart = [...cart];
        const indexProduct = cart.findIndex ((productCart) => productCart.id === newPruduct.id)
        if (indexProduct >= 0) {
            tempCart[indexProduct].quantity = tempCart[indexProduct].quantity + newPruduct.quantity
            setCart(tempCart)
        } else {
            setCart([...cart, newPruduct])
        
        }
            
        }
    

    const deleteProductById = (id) => {
        const productsFilter = cart.filter((productCart) => productCart.id !== id)
        setCart(productsFilter)
    }

    const deleteCart = () => {
        setCart([])
    }

    const totalQuantity = () => {
        const quantity = cart.reduce((total, productCart) => total + productCart.quantity, 0);
        return quantity
    }

    const totalPrice = () => {
        const price = cart.reduce((total, productCart) => total + productCart.price * productCart.quantity, 0);
        return price
    }


    return (
        <cartContext.Provider value={ {cart, addProductInCart, totalQuantity, totalPrice, deleteProductById, deleteCart} }>
            { children }
            
        </cartContext.Provider>
    )

}
export { cartContext, CartProvider }