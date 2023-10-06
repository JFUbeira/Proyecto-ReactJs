import React from 'react'
import ItemCount from '../Counter/ItemCount'

const ItemDetail = ({ product }) => {
    if (!product) {
        return <div>Cargando producto...</div>;
    }

    console.log('Prop product en ItemDetail:', product);

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
                <ItemCount initial={0} stock={product.stock} />
            </div>
        </div>
    )
}

export default ItemDetail