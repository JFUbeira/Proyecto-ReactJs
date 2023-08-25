import React from 'react'
import './CartWidget.css'
import img from '../../../../images/cart-icon1.png'

const CartWidget = () => {
    return (
        <ul>
            <li>
                5<img src={img}/>
            </li>
        </ul>
    )
}

export default CartWidget