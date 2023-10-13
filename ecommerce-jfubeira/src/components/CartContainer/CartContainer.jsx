// import React, { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

import { useCartContext } from "../../context/CartContext"

const CartContainer = () => {
    const {cartItems, clearCartItems} = useCartContext()
    console.log(cartItems)
    return (
    <div>
        {cartItems.map(prod => <div key={prod.id}>
            <img src={prod.imageUrl} className="w-25" />
            {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
            <button> X </button>
        </div>)}
        <button onClick={clearCartItems}>Limpiar carrito</button>
    </div>
    )
}

export default CartContainer