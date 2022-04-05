
import React from 'react';
import './HomeReview.css'

const HomeReview = (props) => {
    const {review} = props;
    const {id, name, ratings, comment} = review;
    return (
        <div className='home-review-info'>
            <h2 className='text-2xl font-semibold my-1'>{name}</h2>
            <p className='my-1'><span>Review:</span> {comment}</p>
            <p><span>Ratings:</span> {ratings}</p>
        </div>
    );
};

export default HomeReview;