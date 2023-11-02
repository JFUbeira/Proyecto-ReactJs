// import React, { useContext } from 'react'
// import { CartContext } from '../../context/CartContext';
import { CartContext, useCartContext } from '../../context/CartContext'

import ItemCount from '../Counter/ItemCount'

const ItemDetail = ({ product }) => {
    const { addProduct, cartItems } = useCartContext(CartContext)

    if (!product) {
        return <div>Cargando producto...</div>
    }

    const onAdd = (count) => {
        addProduct({ ...product, quantity: count })
    }

    console.log(cartItems)

    return (
        <div className="d-flex justify-content-center">
            <div className="card w-50 mt-5">
                <div className="card-body">
                    <img className="w-50 card-img-top" src={product.imageUrl} />
                    <div>
                        <p>Nombre: {product.name}</p>
                        <p>Descripción: {product.description}</p>
                        <p>Precio: {product.price}</p>
                        <p>Stock: {product.stock}</p>
                    </div>
                </div>
                <div className="col">
                    <ItemCount
                        initial={1}
                        stock={product.stock}
                        onAdd={onAdd}
                    />
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
