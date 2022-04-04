import React from "react";
import './Home.css'

const Home = () => {
  return (
    <div className="product-container">
      <div className="hading-container mr-10">
        <h1 className="text-4xl font-bold my-8">Amazfit GTR 3 Pro
        </h1>
        <p>
            The watch inspired by classic watches. The Amazfit GTR 3 Pro has a round metal body made from lightweight aircraft-grade aluminum alloy. The bezel-less design integrates with the curved glass screen to body ratio. 
        </p>
      </div>
      <div className="image-container ms-auto">
        <img src="https://site-cdn.huami.com/files/amazfit/en/gtr3-pro/1-new.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
