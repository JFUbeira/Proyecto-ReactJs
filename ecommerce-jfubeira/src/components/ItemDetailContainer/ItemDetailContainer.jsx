import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemDetail from '../ItemDetail/ItemDetail'
import { mFetch } from '../../utils/mockFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { pid } = useParams()
    console.log(pid)

    useEffect(() => {
        mFetch(Number(pid))
        .then(resp => setProduct(resp))
        .catch(err => console.log(err))
        }, [])

        if (product) {
            // El código dentro de este bloque se ejecutará si product existe y es verdadero
            console.log('product existe y es verdadero:', product);
        } else {
            // El código dentro de este bloque se ejecutará si product no existe o es falso
            console.log('product no existe o es falso');
        }      

    return (
        <div>
            <ItemDetail product={product} /> 
        </div>
        )
}

export default ItemDetailContainer















// import React, { useEffect } from 'react'
// import ItemDetail from '../ItemDetail/ItemDetail'
// import { mFetch } from '../../utils/mockFetch'

// const ItemDetailContainer = () => {
//     useEffect(()=>{
//         mFetch(2)
//         .then(resp => setProduct(resp))
//         .catch(err => console.log(err))
//     }, [])
//     return (
//         <div>
//             <ItemDetail product={product} />
//         </div>
//     )
// }

// export default ItemDetailContainer