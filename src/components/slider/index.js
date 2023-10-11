"use client";

import React, { useState } from "react";
import SlideItem from "./Item";
import RSlider from "react-slick";
import { useWindowSize } from "@/utils/function";
import { Button } from "@mui/material";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
};

function NextArrow(props) {
  const { style, onClick, className } = props;
  return (
    <div
      className={` next-slide`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {className.includes("slick-disabled") ? (
        <Image
          src={require("@/assets/icon/arrow-left.png")}
          width={24}
          height={24}
          style={{
            transform: "rotate(180deg)",
          }}
        />
      ) : (
        <Image
          src={require("@/assets/icon/arrow-right.png")}
          width={24}
          height={24}
        />
      )}
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={` prev-slide`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      {className.includes("slick-disabled") ? (
        <Image
          src={require("@/assets/icon/arrow-left.png")}
          width={24}
          height={24}
        />
      ) : (
        <Image
          src={require("@/assets/icon/arrow-right.png")}
          width={24}
          height={24}
          style={{
            transform: "rotate(180deg)",
          }}
        />
      )}
    </div>
  );
}
const Slider = (props) => {
  const { data = [] } = props;
  const size = useWindowSize();
  const [limit, setLimit] = useState(4);
  if (size?.width <= 480) {
    return (
      <div>
        {data.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: index > limit ? (limit ? "block" : "none") : "block",
              marginBottom: 24,
            }}
          >
            <SlideItem item={item} />
          </div>
        ))}
        {limit + 4 < data.length && (
          <Button onClick={() => setLimit((prev) => prev + 4)}>
            Load More
          </Button>
        )}
      </div>
    );
  }
  return (
    <RSlider {...settings}>
      {data.map((item, index) => (
        <div key={item.id || index}>
          <SlideItem item={item} />
        </div>
      ))}
    </RSlider>
  );
};

export default Slider;
