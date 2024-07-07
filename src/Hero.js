// Hero.js
import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div className="hero-slide">
          <img  src="img/istockphoto-1601074364-612x612.jpg" alt="Refer a Friend 1" />
          <div className="hero-content">
            <h1>Let's Learn And Earn</h1>
            <p>Get a chance to earn Rs. 15,000</p>
            <button className="hero-button">Refer Now</button>
          </div>
        </div>
        <div className="hero-slide">
          <img src="https://ca.ecoflow.com/cdn/shop/files/Group_1379.webp?v=1684323877" alt="Refer a Friend 2" />
          <div className="hero-content">
            <h1>Discover New Opportunities</h1>
            <p>Take the first step towards a brighter future.</p>
            <button className="hero-button">Learn More</button>
          </div>
        </div>
        <div className="hero-slide">
          <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Refer a Friend 3" />
          <div className="hero-content">
            <h1>Join Our Community</h1>
            <p>Connect with like-minded individuals and grow together.</p>
            <button className="hero-button">Join Now</button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
