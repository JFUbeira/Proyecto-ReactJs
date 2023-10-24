import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import {
    collection,
    getDocs,
    getFirestore,
    query,
    where,
} from "firebase/firestore";

const ItemListContainer = () => {
    const [products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const { cid } = useParams();

    // useEffect(() => {
    //     if (cid) {
    //         mFetch()
    //             .then((resp) =>
    //                 setProduct(
    //                     resp.filter((product) => cid === product.category)
    //                 )
    //             )
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false));
    //     } else {
    //         mFetch()
    //             .then((resp) => setProduct(resp))
    //             .catch((err) => console.log(err))
    //             .finally(() => setLoading(false));
    //     }
    // }, [cid]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const queryCollection = collection(db, "products");
    //     const queryFilter = query(
    //         queryCollection,
    //         where("category", "==", cid)
    //     ))
    //     if (cid) {
    //         getDocs(queryFilter)
    //             .then((resp) =>
    //                 setProduct(
    //                     resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
    //                 )
    //             )
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false));
    //     } else {
    //         .then((resp) => setProduct(resp))
    //         .catch((err) => console.log(err))
    //         .finally(() => setLoading(false));
    // }, [cid];

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();
            const queryCollection = collection(db, "products");

            if (cid) {
                // Si se proporciona "cid", aplicar filtro.
                const queryFilter = query(
                    queryCollection,
                    where("category", "==", cid)
                );
                try {
                    const resp = await getDocs(queryFilter);
                    const productsData = resp.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }));
                    setProduct(productsData);
                } catch (err) {
                    console.error("Error al obtener productos:", err);
                }
            } else {
                // Si no se proporciona "cid", obtener todos los productos.
                try {
                    const resp = await getDocs(queryCollection);
                    const productsData = resp.docs.map((prod) => ({
                        id: prod.id,
                        ...prod.data(),
                    }));
                    setProduct(productsData);
                } catch (err) {
                    console.error("Error al obtener todos los productos:", err);
                }
            }

            setLoading(false);
        };

        fetchData();
    }, [cid]); // Asegúrate de que cid sea una dependencia para que se dispare el efecto cuando cambie.

    return (
        <center>
            <div className="row">
                {loading ? (
                    <h2>Espere un momento por favor</h2>
                ) : (
                    <ItemList products={products} />
                )}
            </div>
        </center>
    );
};

export default ItemListContainer;
