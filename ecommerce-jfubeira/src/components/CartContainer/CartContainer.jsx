import { useState } from 'react'
import { useCartContext } from '../../context/CartContext'
import { addDoc, collection, doc, getFirestore, updateDoc } from 'firebase/firestore'
import { toast } from 'react-toastify'

const CartContainer = () => {
    const { cartItems, clearCartItems, deleteItem, totalAmount } =
        useCartContext()
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        email: '',
    })

    const generatePurchaseOrder = (event) => {
        event.preventDefault()
        const order = {}
        order.buyer = {
            name: dataForm.name,
            phone: dataForm.phone,
            email: dataForm.email,
        }
        order.items = cartItems.map((prod) => {
            return {
                id: prod.id,
                name: prod.name,
                price: prod.price,
                quantity: prod.quantity,
            }
        })
        order.total = totalAmount()
        console.log(order)

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order).then((resp) => console.log(resp))

        const updatePromises = cartItems.map((prod) => {
            const queryUpdateProduct = doc(queryDB, 'products', prod.id)
            return updateDoc(queryUpdateProduct, {
                stock: prod.stock - prod.quantity,
            })
        })

        Promise.all(updatePromises).then(() => {
            console.log('Stock actualizado')
        })

        toast.success('Se generó la orden de compra correctamente', {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        
        clearCartItems()
    }

    const handleOnChange = (event) => {
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }

    const cartClearedToast = () => {
        toast.info('Se vació el carrito de compras', {
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

    const handleButtonClick = () => {
        clearCartItems()
        cartClearedToast()
    }

    return (
        <div>
            {cartItems.length === 0 ? (
                <div>
                    <h3>Ups... ¡parece que no tienes nada en el carrito!</h3>
                    <button onClick={() => (window.location.href = '/')}>
                        Volver al inicio
                    </button>
                </div>
            ) : (
                <>
                    {cartItems.map((prod) => (
                        <div key={prod.id}>
                            <img src={prod.imageUrl} className="w-25" />
                            {prod.name} - ${prod.price} - Cantidad:{' '}
                            {prod.quantity}
                            <button onClick={() => deleteItem(prod)}>
                                {' '}
                                X{' '}
                            </button>
                        </div>
                    ))}
                    <button onClick={handleButtonClick}>Limpiar carrito</button>
                    <h2>Suma total: ${totalAmount()}</h2>
                    <form onSubmit={generatePurchaseOrder}>
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Nombre"
                            value={dataForm.name}
                            onChange={handleOnChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Teléfono"
                            value={dataForm.phone}
                            onChange={handleOnChange}
                        />
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email" 
                            value={dataForm.email}
                            onChange={handleOnChange}
                        />
                        <button type="submit">Generar orden de compra</button>
                    </form>
                </>
            )}
        </div>
    )
}

export default CartContainer

// const generatePurchaseOrder = () => {
//     const order = {}
//     order.buyer = {
//         name: 'Juan',
//         phone: '1122334455',
//         email: 'juan@hotmail.com',
//     }
//     order.items = cartItems.map((prod) => {
//         return {
//             id: prod.id,
//             name: prod.name,
//             price: prod.price,
//             quantity: prod.quantity,
//         }
//     })
//     order.total = totalAmount()
//     console.log(order)

//     const queryDB = getFirestore()
//     const ordersCollection = collection(queryDB, 'orders')
//     addDoc(ordersCollection, order).then((resp) => console.log(resp))

//     const queryUpdateProduct = doc(
//         queryDB,
//         'products',
//         '5sAUCSDoo2mHfj3NLlFD'
//     )
//     updateDoc(queryUpdateProduct, {
//         stock: 99,
//     })
// }
