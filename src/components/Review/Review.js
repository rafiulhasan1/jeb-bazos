import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Review.css'

const Review = ({product}) => {
    const {name , img , quantity , price} =product
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='review-item-details'>
                <div className='details'>
                    <h3>{name}</h3>
                    <p><small>Price :{price}</small></p>
                    <p><small>Quantity :{quantity}</small></p>
                </div>
                <div className='detail-delate'>
                    <button className='btn-delate'>
                        <FontAwesomeIcon className='font-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Review;