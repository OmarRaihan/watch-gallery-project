import React from 'react';
import './Review.css'

const Review = (props) => {
    const {name, ratings, comment} = props.review;
    return (
        <div className='review-info'>
            <h2 className='text-2xl font-semibold my-1'>{name}</h2>
            <p className='my-1'><span>Review:</span> {comment}</p>
            <p><span>Ratings:</span> {ratings}</p>
        </div>
    );
};

export default Review;