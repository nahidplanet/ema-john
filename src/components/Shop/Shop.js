
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

import './Shop.css'
import Cart from '../Cart/Cart';

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart ,setCart ] = useState([]);
    

    useEffect(() => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handler = (product) => {
        const addCart = [...cart, product];
        setCart(addCart);

        // const totalPrice = addCart.reduce((x,y)=>x+y.price,0);
        // setTotalPrice(totalPrice);
        
        
        // const totalShipping = addCart.reduce((x,y)=>x+y.shipping,0);
        // setShipping(totalShipping);

        

    }

    return (
        <div className='shop-container'>
            {/* product area  */}
            
            <div className='product-container'>
                {
                    products.map(product => 
                    <ProductCard 
                        key={product.id} 
                        handler={handler} 
                        product={product}>

                    </ProductCard>)
                }
            </div>
            
            {/* product summary */}
            
            <div className='card-container'>
                <Cart carts={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;