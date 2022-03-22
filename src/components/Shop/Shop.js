import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Products from '../Product/Products';
import './shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])

    const[cart,setCart]=useState([])

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(response => response.json())
            .then(json => setProducts(json))

    },[])
    const handleAddToCart=(products)=>{
        console.log(products)
        const newCart=[...cart,products]
        setCart(newCart)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(pd=><Products 
                        key={pd.id}
                        pd={pd}
                        handleAddToCart={handleAddToCart}
                        ></Products>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;