"use client";

import React, { useState } from "react";
import { MessageCircleMore } from "lucide-react";

const Tabs = () => {
  const [category, setCategory] = useState("1");
  const [activeButton, setActiveButton] = useState("1");

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
    setCategory(buttonId); // Set category based on button clicked
  };

  return (
    <section id="tabs" className="cq8p6 co2a3 czjaw cnqgv">
      {/*---- Background gradient --*/}
      <div
        className="cey85 cww77 c1qo9 c7l4p ccuod chf91 cgk3d chb9f c2ysc c4shy"
        aria-hidden="true"
      ></div>

      {/*---- End background gradient --*/}
      <div className="czd2q czjaw c92f3 cmhb9 c1plj">
        <div className="c1xxg cxbax">
          {/*---- Section header --*/}
          <div className="c5ymx calbx c1r3i cmhb9 ccem0">
            <h2 className="cps50 cyb9k cdjn8">
              Turn your ideas into reality in seconds
            </h2>
            <p className="text-gray-600 c0atf czz36">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/*---- Section content --*/}
          <div className="cnenp cy220 crcpd c74as">
            {/*---- Category buttons --*/}
            <div className="criy0 cw3my cgjws cyb33 cxu0t cc5g5 cmcbz c198j cnc7y">
              <button
                id="button1"
                className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                  activeButton === "1"
                    ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))]"
                    : "c6zr7 cco8t cj3dx cocu3"
                }`}
                onClick={() => handleButtonClick("1")}
                style={{ letterSpacing: "normal" }}
              >
                <svg
                  className="c2npy cui34 ckyke cca3l"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`c4u31 ${
                      activeButton === "1"
                        ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                        : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                    }`}
                    d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"
                  ></path>
                </svg>
                <span
                  className={`${
                    activeButton === "1"
                      ? "text-white dark:text-customTeal"
                      : "text-gray-600 dark:text-customGrey"
                  }`}
                >
                  Getting Started
                </span>
              </button>
              <button
                id="button2"
                className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                  activeButton === "2"
                    ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx text-white dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))] dark:text-[rgb(79 209 197)]"
                    : "text-gray-600 dark:text-[rgb(212 212 216)] c6zr7 cco8t cj3dx cocu3"
                }`}
                onClick={() => handleButtonClick("2")}
                style={{ letterSpacing: "normal" }}
              >
                <svg
                  className="c2npy cui34 ckyke cca3l"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`c4u31 ${
                      activeButton === "2"
                        ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                        : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                    }`}
                    d="M8 3l4 4H4zM8 13L4 9h8zM1 0h14v2H1zM1 14h14v2H1z"
                  ></path>
                </svg>
                <span
                  className={`${
                    activeButton === "2"
                      ? "text-white dark:text-customTeal"
                      : "text-gray-600 dark:text-customGrey"
                  }`}
                >
                  Collection list
                </span>
              </button>
              <button
                id="button3"
                className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                  activeButton === "3"
                    ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx text-white dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))] dark:text-[rgb(79 209 197)]"
                    : "text-gray-600 dark:text-[rgb(212 212 216)] c6zr7 cco8t cj3dx cocu3"
                }`}
                onClick={() => handleButtonClick("3")}
                style={{ letterSpacing: "normal" }}
              >
                <svg
                  className="c2npy cui34 ckyke cca3l"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`c4u31 ${
                      activeButton === "3"
                        ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                        : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                    }`}
                    d="M6 0H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1V1a1 1 0 00-1-1zM5 5H2V2h3v3zM15 9h-5a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5h-3v-3h3v3zM6 9H1a1 1 0 00-1 1v5a1 1 0 001 1h5a1 1 0 001-1v-5a1 1 0 00-1-1zm-1 5H2v-3h3v3zM12.5 7a1 1 0 01-.707-.293l-2.5-2.5a1 1 0 010-1.414l2.5-2.5a1 1 0 011.414 0l2.5 2.5a1 1 0 010 1.414l-2.5 2.5A1 1 0 0112.5 7z"
                  ></path>
                </svg>
                <span
                  className={`${
                    activeButton === "3"
                      ? "text-white dark:text-customTeal"
                      : "text-gray-600 dark:text-customGrey"
                  }`}
                >
                  Element Hierarchy
                </span>
              </button>
              <button
                id="button4"
                className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                  activeButton === "4"
                    ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx text-white dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))] dark:text-[rgb(79 209 197)]"
                    : "text-gray-600 dark:text-[rgb(212 212 216)] c6zr7 cco8t cj3dx cocu3"
                }`}
                onClick={() => handleButtonClick("4")}
                style={{ letterSpacing: "normal" }}
              >
                <svg
                  className="c2npy cui34 ckyke cca3l"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`c4u31 ${
                      activeButton === "4"
                        ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                        : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                    }`}
                    d="M15.4.6c-.84-.8-2.16-.8-3 0L8.7 4.3c.73.252 1.388.68 1.916 1.244.469.515.83 1.119 1.065 1.775L15.4 3.6c.8-.84.8-2.16 0-3zM4.937 6.9c-1.2 1.2-1.4 5.7-1.4 5.7s4.4-.4 5.6-1.5a2.987 2.987 0 000-4.2 2.9 2.9 0 00-4.2 0z"
                  ></path>
                </svg>
                <span
                  className={`${
                    activeButton === "4"
                      ? "text-white dark:text-customTeal"
                      : "text-gray-600 dark:text-customGrey"
                  }`}
                >
                  Styling Basics
                </span>
              </button>
              <button
                id="button5"
                className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                  activeButton === "5"
                    ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx text-white dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))] dark:text-[rgb(79 209 197)]"
                    : "text-gray-600 dark:text-[rgb(212 212 216)] c6zr7 cco8t cj3dx cocu3"
                }`}
                onClick={() => handleButtonClick("5")}
                style={{ letterSpacing: "normal" }}
              >
                <svg
                  className="c2npy cui34 ckyke cca3l"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className={`c4u31 ${
                      activeButton === "5"
                        ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                        : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                    }`}
                    d="M11 16v-5h5V0H5v5H0v11h11zM2 7h7v7H2V7z"
                  ></path>
                </svg>
                <span
                  className={`${
                    activeButton === "5"
                      ? "text-white dark:text-customTeal"
                      : "text-gray-600 dark:text-customGrey"
                  }`}
                >
                  Image Field
                </span>
              </button>
            </div>

            {/*---- Videos --*/}
            <div className="cjyhr c04nn cdzyi c2k38 cmhb9">
              <div className="co9sm cbv7r c74as">
                {["1"].includes(category) && (
                  <div className="czjaw">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Using index pages
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          2 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["1", "2"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Working with content
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          4 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["1", "3"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Using cover pages
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          7 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["1", "4"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Intro to the style model
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          9 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["2", "5"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Exploring collections
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          12 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["2", "3"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Understand hierarchy
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          3 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["2", "4"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Customisations
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          11 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["3", "5"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Image galleries
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          6 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["5"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Sorting images
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          4 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {["5"].includes(category) && (
                  <div className="cw3my cxdxt czjaw cszwl cnc7y">
                    <img
                      className="cs8sl"
                      src="https://preview.cruip.com/appy/images/video-thumb.jpg"
                      width="352"
                      height="264"
                      alt="Video thumbnail 01"
                    />
                    <div className="cgk3d c54sb c2ysc cnc7y">
                      <div className="cw3my cxdxt cnc7y c2h4q">
                        <a className="cmemh clq5w ccb29 ceo83" href="#0">
                          <img
                            src="https://preview.cruip.com/appy/images/play-button.svg"
                            width="72"
                            height="72"
                            alt="Play icon"
                          />
                        </a>
                      </div>
                      <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                        <a className="c0atf c8d3u cf4hw" href="#0">
                          Filters
                        </a>
                        <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                          9 Min
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tabs;
