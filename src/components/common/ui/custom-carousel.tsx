"use client";
import React from "react";
import Slider, { Settings } from "react-slick";
import ArrowIcon from "../icons/arrow-icon";
import Image, { StaticImageData } from "next/image";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ display: "block", height: "75px" }} onClick={onClick}>
      <ArrowIcon />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "none" }} onClick={onClick}></div>;
}

const CarouselCustom = ({ items }: { items: StaticImageData[] }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
    ],
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  return (
    <div className="slider-container my-10 w-[95%]">
      <Slider {...settings}>
        {items.map((item) => (
          <div className=" flex h-[170px] items-center justify-center " key={item.src}>
            <Image
              style={{ width: "60%", height: "60%", objectFit: "contain", marginTop: "40px" }}
              className="mx-auto my-auto "
              src={item}
              alt={item.src}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
export default CarouselCustom;
