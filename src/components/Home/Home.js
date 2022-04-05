import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import HomeReview from "../HomeReview/HomeReview";
import useReviews from "../Hooks/useReviews";
import Reviews from "../Reviews/Reviews";
import './Home.css'

const Home = () => {
  const [reviews, setReviews] = useReviews();

  const navigate = useNavigate();
  const seeAllReviews = () =>{
    // <Routes>
    //   <Route
    //   path="/reviews" element={<Reviews/>}
    //   >
    //   </Route>
    // </Routes>
    // const path = `/reviews/${}`
  }
  return (
    <div className="full-container mb-16">
      <div className="product-container">
      <div className="hading-container mr-10">
        <h1 className="text-4xl font-bold my-8">Amazfit GTR 3 Pro
        </h1>
        <p>
            The watch inspired by classic watches. The Amazfit GTR 3 Pro has a round metal body made from lightweight aircraft-grade aluminum alloy. The bezel-less design integrates with the curved glass screen to body ratio. 
        </p>
        <div className="demo-btn">
        <button className="bg-purple-200 font-semibold px-6 py-3 my-8 rounded">Live Demo</button>
        </div>
      </div>
      <div className="image-container ms-auto">
        <img src="https://site-cdn.huami.com/files/amazfit/en/gtr3-pro/1-new.png" alt="" />
      </div>
      </div>
      <div className="customer-review">
        <h1 className="my-16 text-3xl font-bold">Customer Review</h1>
        <div className="home-review">
          {
            reviews.map(review => <HomeReview
            key={review.id}
            review={review}
            ></HomeReview>)
          }
        </div>
      </div>
      <button onClick={seeAllReviews} className="bg-blue-500 px-6 py-1 rounded text-white">See All Reviews</button>
    </div>
  );
};

export default Home;
