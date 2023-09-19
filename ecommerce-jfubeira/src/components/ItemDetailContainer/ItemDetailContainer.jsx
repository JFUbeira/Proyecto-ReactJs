import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { mFetch } from '../../utils/mockFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    useEffect(() => {
        mFetch(1)
        .then((resp) => console.log(resp))
        .catch((err) => console.log(err))
        }, [])

    return (
        <div>
            {product ? <ItemDetail product={product} /> : 'Cargando producto...'}
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