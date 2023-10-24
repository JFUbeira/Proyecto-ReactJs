import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    let [product, setProduct] = useState({});
    // 1 posicion -> dato
    // 2 posicion -> setter -> funcion que modifica el valor
    const { pid } = useParams();

    // aca deberias chequear si ese id existe en 1 db, si no existe mostrar 1 componente de error

    useEffect(() => {
        const db = getFirestore();
        const queryDoc = doc(db, "products", pid);
        getDoc(queryDoc)
            .then((resp) => ({ id: resp.id, ...resp.data() }))
            .then((resp) => setProduct(resp));
    }, []);

    // useEffect(() => {
    //     console.log("2do log");
    //     mFetch(Number(pid)) // mFetch(+pid)
    //         .then((resp) => setProduct(resp))
    //         .catch((err) => console.log(err));
    // }, [pid]);

    return (
        <div>
            <ItemDetail product={product} />
        </div>
    );
};

export default ItemDetailContainer;
