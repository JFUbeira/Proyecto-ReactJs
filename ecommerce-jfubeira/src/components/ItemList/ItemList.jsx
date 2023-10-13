import Item from "../Item/Item";

// TODO: sacar el fragment colocar un div/section para hacerlo mas semantico

const ItemList = ({ products }) => {
    return (
        <>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </>
    );
};

export default ItemList;
