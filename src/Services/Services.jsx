import React from "react";
import './Services.scss';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import pic1 from "../assets/3.jpg";
import pic2 from "../assets/4.jpg";

const Services = () => {
  return (
    <div className="services">
      <Carousel
       infiniteLoop interval={1000} autoPlay showStatus={false} showArrows={false}>
       
        <div>
          <img src={pic1} alt="pic1" />
          <p className="legend" >Full Stack</p>
          
        </div>
        <div>
        <img src={pic2} alt="pic2" />
        <p className="legend" >Peer to Peer Support</p>

          
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
