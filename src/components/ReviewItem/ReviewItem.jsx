import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({product}) => {
    const {id, img, name, price, quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'></span>${price}</p>
                <p>Order Quantity: <span className='orange-text'></span>{quantity}</p>
            </div>
            <button></button>
        </div>
    );
};

export default ReviewItem;