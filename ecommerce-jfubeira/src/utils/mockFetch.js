const products = [
    {id: 1, name: 'Product 1', category: 'Verano', price: 10000, stock: 30, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://markova.com/uploads/picture/image/55393/A802PL_1.jpg'},
    {id: 2, name: 'Product 2', category: 'Verano', price: 20000, stock: 30, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://markova.com/uploads/picture/image/55090/A108CD_1.jpg'},
    {id: 3, name: 'Product 3', category: 'Verano', price: 30000, stock: 40, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://markova.com/uploads/picture/image/55720/Y419CD_1.jpg'},
    {id: 4, name: 'Product 4', category: 'Invierno', price: 40000, stock: 18, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://markova.com/uploads/picture/image/52687/Z123BU_1.jpg'},
    {id: 5, name: 'Product 5', category: 'Invierno', price: 50000, stock: 15, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://markova.com/uploads/picture/image/55932/Z331NE_0.jpg'}
]

export const mFetch  = (pid) =>  new Promise((res,rej) => {
        if(pid){
            setTimeout(()=>{
                res(pid  ? products.find(product => product.id === pid) : products)
            }, 1000)
        }else{
            
        }
})