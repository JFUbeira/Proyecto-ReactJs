import React from 'react'
import { useEffect, useState } from "react"
import { mFetch } from "../../utils/mockFetch"
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = () => { 
    const [products, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const { cid } = useParams()

    useEffect(()=>{
        if (cid){
            mFetch()
            .then(resp => setProduct(resp.filter(product => cid === product.category)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        } else{
            mFetch()
            .then(resp => setProduct(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        }
    },[cid])

    return (
        <center>
            <div className="row">
            { loading ? 
                <h2>Espere un momento por favor</h2> 
            :
                <ItemList products={products} />
            }
            </div>
        </center>
    )
}

export default ItemListContainer


