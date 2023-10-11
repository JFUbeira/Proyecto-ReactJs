import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

import ItemCount from '../Counter/ItemCount'

const ItemDetail = ({ product }) => {
    const {addProduct, cartItems} = useContext(CartContext)

    if (!product) {
        return <div>Cargando producto...</div>;
    }

    const onAdd = (count)=>{
        addProduct({...product, quantity: count})
    }

    console.log(cartItems)

    return(
        <div className="card w-100">
            <h2>Ver detalle</h2>
            <div className="card-body">
                <img className="w-150 card-img-top" src={product.imageUrl} />
                <div>
                    <p>Nombre: {product.name}</p>
                    <p>Descripción: {product.description}</p>
                    <p>Precio: {product.price}</p>
                    <p>Stock: {product.stock}</p>
                </div>
            </div>
            <div className="col">
                <ItemCount initial={1} stock={product.stock} onAdd={onAdd}/>
            </div>
        </div>
    )
}

export default ItemDetail