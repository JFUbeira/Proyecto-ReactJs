import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    return(
        <div className="card w-25">
            <div className="card-body">
                <img className="w-100 card-img-top" src={product.imageUrl} alt=""/>
                <p>Nombre: {product.name}</p>
                <p>Descripción: {product.description}</p>
                <p>Precio: {product.price}</p>
            </div>
            <div className="card-footer">
                <Link to={`/detail/${product.id}`}>
                    <button className="btn btn-outline-dark w-100">Detalle</button>
                </Link>
            </div>
        </div> 
    )
}

export default Item