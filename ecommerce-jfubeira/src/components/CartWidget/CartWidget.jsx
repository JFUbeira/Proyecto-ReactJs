import React from 'react'
import './CartWidget.css'
import img from "../../../images/cart-icon1.png"
import { useCartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {cartItems} = useCartContext()
    const cartWidgetNumber = cartItems.length

    return (
        <ul>
            <li>
                {cartWidgetNumber}<img src={img}/>
            </li>
        </ul>
    )
}

export default CartWidget