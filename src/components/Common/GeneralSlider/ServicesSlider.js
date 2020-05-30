import React from "react";
import "./scss/_slider.scss";
import Slider from "react-slick";
import Service from "./Service";

class ServicesSlider extends React.Component {
    render() {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        swipeToSlide : true,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <Slider {...settings} className="coursesSlider">
            <Service /> 
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service />
            <Service /> 
            <Service />
            <Service />
        </Slider>
      );
    }
  }
  export default ServicesSlider;