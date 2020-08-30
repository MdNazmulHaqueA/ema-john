import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    // console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [products,setProducts] = useState(first10);

    const [cart,setCart] = useState([]);

    //event handler
    const handleAddProduct = (product) => {
        console.log('Product Added',product);
        const newCart = [...cart,product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(pd => <Product         
                        product={pd}
                        handleAddProduct = {handleAddProduct}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                {/* <h1>This is cart</h1>
                <h5>Order Summary: { cart.length}</h5> */}
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;