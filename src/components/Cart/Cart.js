
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
const Cart = ({carts}) => {
    let total = 0;
    let shipping = 0;
    for (const cart of carts) {
        total = total + cart.price;
        shipping = shipping + cart.shipping;
    }
    
    const tax =  parseFloat((total* 0.1).toFixed(2));
    console.log(tax);
    const grandTotal = total+shipping+ Math.round(tax);
    return (
        <div>
            <h4 className='title'>Order Summary</h4>
                <ul>
                    <li>Selected Items: <span>{carts.length}</span> </li>
                    <li>Total Price: $<span>{total}</span> </li>
                    <li>Total Shipping Charge: $<span>{shipping}</span> </li>
                    <li>Tax: $<span>{tax}</span> </li>
                </ul>
                <h4 className='total'>Grand Total: $<span>{grandTotal}</span></h4>
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
    );
};

export default Cart;