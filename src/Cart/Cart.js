import React from 'react';
import'./Cart.css'

const Cart = (props) => {
    return (
        <div>
            
                <h4>order summery</h4>
                <p>Selected Item : {props.cart.length}</p>
            </div>
       
    );
};

export default Cart;