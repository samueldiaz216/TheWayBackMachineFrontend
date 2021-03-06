import React from 'react';
import './Product.css'

function Product() {
    return (
        <div className="product">
            <img className="product-tape" src="images/tape-removebg-preview.png" alt="" />
            <img className="product-main-image" src='images/redjacketfront.jpg'/>
            <div className="productInfo">
                <h2 className="productTitle">Red Jacket</h2>
                <h2 className="productPrice">$18</h2>
                <button className="add-to-basket-button">
                    <img src="images/shopping-cart.png"></img>
                </button>
            </div>
        </div>
    )
}

export default Product
