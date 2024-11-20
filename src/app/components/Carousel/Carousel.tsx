"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Autoplay } from "swiper";
import { div } from "framer-motion/client";

const Carousel = ({ items }) => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const totalSlides = items.length;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.realIndex;
    setActiveIndex(currentIndex);
  };

  return (
    <div>
      {isClient && (
        <Swiper
          spaceBetween={24} // Adjust this value to control the space between slides
          centeredSlides
          loop={true}
          pagination={{ clickable: true }}
          initialSlide={1}
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          onSwiper={(swiperInstance) => setSwiper(swiperInstance)}
          onSlideChange={handleSlideChange}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide for small devices
            },
            768: {
              slidesPerView: 2.56, // 2.3 slides for medium devices and up
            },
          }}
          className="swiper-container"
          modules={[Autoplay]}
        >
          {/* Carousel Items */}
          {items.map((item, index) => (
            <SwiperSlide
              key={item.id}
              className="swiper-slide c4xyx"
              style={{
                opacity: index === activeIndex ? 1 : 0.32,
                transition: "transform 0.3s, opacity 0.3s",
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="c1qic cjb2b"
                style={{ width: "540px", height: "auto" }}
              />
              <div className="c1qic ccrtt cjb2b cgk3d c54sb c2ysc cnc7y">
                <div
                  className="cnc7y c2h4q"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <a
                    className="text-white bg-teal-500 cvy08 czak8 c6kb8 cmhb9 c9xc1"
                    href="#0"
                  >
                    Learn more
                  </a>
                </div>
                <div
                  className="cgk3d c35ck c2s69 cdt9h"
                  style={{
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                >
                  <a
                    className="text-white crwpf cbnia cpz4m clq5w cutri c5ymx cf4hw ccb29 ceo83 cqmyn c5mw1 ci4w1"
                    href="#0"
                  >
                    Creative Services
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Navigation buttons */}
      <div className="czd2q c92f3 cmhb9 c1plj">
        <div className="flex justify-between items-center w-full py-20 pt-0 box-border ctiy6 cxdxt cb7l0 clfxw cnc7y">
          <button
            onClick={() => swiper?.slidePrev()}
            className="group flex dark:bg-[#2e2e33] items-center p-5 bg-[#38b2a5] text-white border-none cursor-pointer transition-colors duration-300 hover:bg-[#4fd1c5] dark:hover:bg-[#38b2a5]/[0.25]"
            aria-label="Previous slide"
          >
            <svg
              className="w-4 h-4 fill-white dark:group-hover:fill-[#3ABAB4]"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z"></path>
            </svg>
          </button>

          <button
            onClick={() => swiper?.slideNext()}
            className="flex dark:bg-[#2e2e33]  items-center p-5 bg-[#38b2a5] text-white border-none cursor-pointer transition-colors duration-300 hover:bg-[#4fd1c5] dark:hover:bg-[#38b2a5]/[0.25]"
            aria-label="Next slide"
          >
            <svg
              className="w-4 h-4 fill-white dark:group-hover:fill-[#3ABAB4]"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
