import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import './ProductCard.css'

const ProductCard = ({handler,product}) => {
    const {name,img,price,ratings,seller} = product;
    return (
        <div className='single-card'>
            <div className='product-card'>
                <div className="card-image">
                    <img src={img} alt="" />
                </div>
                <div className="card-body">
                    <h2>{name}</h2>
                    <h3>price: $<span>{price}</span></h3>
                    <div className="brand">
                        <h4>Manufacturer : <span>{seller}</span></h4>
                    </div>
                    <div className="ratting">
                        <h4>Ratting : <span>{ratings}</span> star</h4>
                    </div>

                </div>
            </div>
            <div className="card-footer">
                    <button className='add-button' type='button'  onClick={ () => handler(product)}>Add to Cart</button>
                    <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                    
            </div>
        </div>
    );
};

export default ProductCard;