"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import items from "../../../../data/items.json";
import Carousel from "../Carousel/Carousel";

const Products = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const totalSlides = 5;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(currentIndex);
  };

  return (
    <section id="carousel" className="cq8p6 co2a3 cnqgv">
      <div className="c1xxg cxbax">
        <div className="czd2q c92f3 cmhb9 c1plj">
          <div className="c5ymx calbx c1r3i cmhb9 ccem0">
            <h1 className="cps50 cyb9k cdjn8">
              From rough design files, to powerful products
            </h1>
            <p className="text-gray-600 c0atf czz36">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>
        </div>
        <Carousel items={items} />
      </div>
    </section>
  );
};

export default Products;
