import React, { useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { mFetch } from '../../utils/mockFetch'

const ItemDetailContainer = () => {
    useEffect(()=>{
        mFetch(3)
        .then(resp => console.log(resp))
    }, [])
    return (
        <div>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer