import React from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "../styles/MySlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow({ className, style, onClick, currentSlide, slideCount }) {
  const isDisabled = currentSlide === slideCount - 1;
  return (
    <button
      className={`slider-arrow slider-arrow-next ${className}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Next slide"
    >
      <FiChevronRight size={24} color="#FF1493" />
    </button>
  );
}

function SamplePrevArrow({ className, style, onClick, currentSlide }) {
  const isDisabled = currentSlide === 0;
  return (
    <button
      className={`slider-arrow slider-arrow-prev ${className}`}
      style={{ ...style }}
      onClick={onClick}
      aria-label="Previous slide"
    >
      <FiChevronLeft size={24} color="#FF1493" />
    </button>
  );
}

export default function MySlider({
  data = [],
  slidesToShow,
  slidesToScroll,
  arrows = true,
  isChart = false,
  wrapSlides = false,
  rows = 1,
  cols = 1,
}) {
  const settings = {
    dots: false,
    speed: 500,
    rows,
    slidesPerRow: cols,
    slidesToShow,
    slidesToScroll: Math.min(slidesToScroll || 1, data.length),
    infinite: wrapSlides && data.length > slidesToShow,
    nextArrow: arrows ? <SampleNextArrow /> : null,
    prevArrow: arrows ? <SamplePrevArrow /> : null,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id} className="slider-item">
            <div className={`slider-card ${isChart ? 'chart-card' : ''}`}>
              {item.content ? (
                <>
                  <div className="card-title">{item.title}</div>
                  <div className="card-content">{item.content}</div>
                </>
              ) : (
                <>
                  <div className="card-title">{item.title}</div>
                  <div className="card-value">{item.value}</div>
                </>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
