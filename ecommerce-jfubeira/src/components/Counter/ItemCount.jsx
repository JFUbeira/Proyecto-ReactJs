import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd }) => {
    const [counter, setCounter] = useState(initial)

    const handleAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }
    const handleSubstract = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    const handleOnAdd = () => onAdd(counter)

    return (
        <center>
            <button onClick={handleSubstract}> -1 </button>
            <label>
                <strong> {counter} </strong>
            </label>
            <button onClick={handleAdd}> +1 </button>
            <button onClick={handleOnAdd}>Agregar al carrito</button>
        </center>
    )
}

export default ItemCount
