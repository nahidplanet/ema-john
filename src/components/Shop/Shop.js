
import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart ,setCart ] = useState([]);
    const [totalPrice ,setTotalPrice ] = useState([]);
    const [shipping ,setShipping ] = useState([]);
    // const [tax ,setTax ] = useState([]);

    useEffect(() => {
        fetch(`products.json`)
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    const handler = (product) => {
        const addCart = [...cart, product];
        setCart(addCart);
        const totalPrice = addCart.reduce((x,y)=>x+y.price,0);
        setTotalPrice(totalPrice);
        
        
        const totalShipping = addCart.reduce((x,y)=>x+y.shipping,0);
        setShipping(totalShipping);

        

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
                <h4 className='title'>Order Summary</h4>
                <ul>
                    <li>Selected Items: <span>{cart.length}</span> </li>
                    <li>Total Price: $<span>{totalPrice}</span> </li>
                    <li>Total Shipping Charge: $<span>{shipping}</span> </li>
                    <li>Tax: $<span>6</span> </li>
                </ul>
                <h4 className='total'>Grand Total: $<span>{totalPrice+shipping}</span></h4>
                <div className='group-btn'>
                    
                    <div className="clear-cart">
                        <button>Clear Cart <span>{
                    <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
                            
                            }</span></button>
                    </div>

                    <div className="previwe-cart">
                        <button>Priviwe Cart <span> {<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>}</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;