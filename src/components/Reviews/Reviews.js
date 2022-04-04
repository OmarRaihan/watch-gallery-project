
import Home from '../Home/Home';
import useReviews from '../Hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews()

    
    return (
        <div className='review-container'>
            {
                reviews.map(review => <Review
                key={review.id}
                review={review}
                ></Review>)
            }

            {/* {
                reviews.map(review => <Home
                key={review.id}
                review={review}
                ></Home>)
            } */}
        </div>
    );
};

export default Reviews;