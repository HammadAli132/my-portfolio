"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

function CustomSlider({ images }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 750,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="rounded-xl overflow-hidden">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative h-60 w-full">
            <Image
              src={img}
              fill
              className="object-cover rounded-xl"
              alt={`Project Slide ${index + 1}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomSlider;