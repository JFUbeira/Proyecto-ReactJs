import { createContext, useState } from "react";

export const CartContext = createContext([])

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState ([])

    const addProduct = (newProduct)=>{
        setCartItems([
            ...cartItems,
            newProduct
        ])
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addProduct
        }}>
            {children}
        </CartContext.Provider>
    )
}

