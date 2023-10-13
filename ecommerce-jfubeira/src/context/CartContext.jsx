import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartItems, setCartItems] = useState ([])

    // const addProduct = (newProduct)=>{
    //     setCartItems([
    //         ...cartItems,
    //         newProduct
    //     ])
    // }

    const addProduct = (newProduct) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cartItems.find((item) => item.id === newProduct.id)
        if (existingProduct) {
          // El producto ya está en el carrito, aumenta la cantidad
            const updatedCartItems = cartItems.map((item) => {
            if (item.id === existingProduct.id) {
                return {
                ...item,
                quantity: item.quantity + newProduct.quantity,
                };
            }
            return item;
            });

            setCartItems(updatedCartItems);
        } else {
          // El producto no está en el carrito, agrégalo
            setCartItems([...cartItems, newProduct]);
            }
        }

    const clearCartItems = () => {
        setCartItems([])
    }

    return (
        <CartContext.Provider value={{
            cartItems,
            addProduct,
            clearCartItems
        }}>
            {children}
        </CartContext.Provider>
    )
}
