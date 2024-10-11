"use client";

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const Carousel = () => {
  const [swiper, setSwiper] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const totalSlides = 5;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or a loader/placeholder until the client renders
  }

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

        <Swiper
          spaceBetween={24} // Adjust this value to control the space between slides
          centeredSlides
          loop={true}
          pagination={{ clickable: true }}
          initialSlide={1}
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
        >
          {/* Carousel Items */}
          {[...Array(totalSlides)].map((_, index) => (
            <SwiperSlide
              key={index}
              className="swiper-slide c4xyx"
              style={{
                opacity: index === activeIndex ? 1 : 0.32,
                transition: "transform 0.3s, opacity 0.3s",
              }}
            >
              <img
                src={`https://preview.cruip.com/appy/images/carousel-item-0${
                  index + 1
                }.jpg`}
                alt={`Carousel item 0${index + 1}`}
                className="c1qic cjb2b"
                style={{ width: "540px", height: "auto" }}
              />
              <div className="mt-2 c1qic ccrtt cjb2b cgk3d c54sb c2ysc cnc7y">
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
      </div>

      {/* Navigation buttons */}
      <div className="czd2q c92f3 cmhb9 c1plj">
        <div className="flex justify-between items-center  w-full  py-20 pt-0 box-border">
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
    </section>
  );
};

export default Carousel;
