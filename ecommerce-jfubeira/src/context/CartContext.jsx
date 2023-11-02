import { createContext, useContext, useState } from 'react'
import { toast } from 'react-toastify'

export const CartContext = createContext([])

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    const addProduct = (newProduct) => {
        // Verificar si el producto ya está en el carrito
        const existingProduct = cartItems.find(
            (item) => item.id === newProduct.id
        )
        const successToast = () => {
            toast.success('Se agrego el producto al carrito', {
                position: 'bottom-left',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            })
        }
        if (existingProduct) {
            // El producto ya está en el carrito, aumenta la cantidad
            const updatedCartItems = cartItems.map((item) => {
                if (item.id === existingProduct.id) {
                    return {
                        ...item,
                        quantity: item.quantity + newProduct.quantity,
                    }
                }
                return item
            })

            setCartItems(updatedCartItems)
            successToast()
        } else {
            // El producto no está en el carrito, agrégalo
            setCartItems([...cartItems, newProduct])
            successToast()
        }
    }

    const clearCartItems = () => {
        setCartItems([])
    }

    const deleteItem = (productToDelete) => {
        const updatedCartItems = cartItems.filter(
            (item) => item.id !== productToDelete.id
        )
        setCartItems(updatedCartItems)
        toast.info('Se eliminó el producto del carrito', {
            position: 'bottom-left',
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'dark',
        })
    }

    const totalAmount = () =>
        cartItems.reduce(
            (totalAmount, objProduct) =>
                (totalAmount += objProduct.price * objProduct.quantity),
            0
        )

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addProduct,
                clearCartItems,
                deleteItem,
                totalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

// const addProduct = (newProduct)=>{
//     setCartItems([
//         ...cartItems,
//         newProduct
//     ])
// }

// const deleteItem = (existingItem) => {
//     const itemToDelete = cartItems.findIndex((item) => item.id === existingItem.id)
//     cartItems.splice(itemToDelete, 1)
//     setCartItems([...cartItems])
// }
