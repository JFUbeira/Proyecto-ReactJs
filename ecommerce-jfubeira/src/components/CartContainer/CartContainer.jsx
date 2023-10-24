// import React, { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'

import { useCartContext } from "../../context/CartContext";

const CartContainer = () => {
    const { cartItems, clearCartItems, deleteItem, totalAmount } =
        useCartContext();
    console.log(cartItems);

    const generatePurchaseOrder = () => {
        const order = {};
        order.buyer = {
            name: "Juan",
            phone: "1122334455",
            email: "juan@hotmail.com",
        };
        order.items = cartItems.map((prod) => {
            return {
                id: prod.id,
                name: prod.name,
                price: prod.price,
                quantity: prod.quantity,
            };
        });
        order.total = totalAmount();
    };

    return (
        <div>
            {cartItems.map((prod) => (
                <div key={prod.id}>
                    <img src={prod.imageUrl} className="w-25" />
                    {prod.name} - ${prod.price} - Cantidad: {prod.quantity}
                    <button onClick={() => deleteItem(prod)}> X </button>
                </div>
            ))}
            <button onClick={clearCartItems}>Limpiar carrito</button>
            <h2>Suma total: ${totalAmount()}</h2>
            <button>Generar orden de compra</button>
        </div>
    );
};

export default CartContainer;
