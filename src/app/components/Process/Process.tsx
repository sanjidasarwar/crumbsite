"use client";

import React, { useState } from "react";

const Process = () => {
  return (
    <section id="process" className="czjaw">
      <div className="czd2q c92f3 cmhb9 c1plj">
        <div className="cq8p6 cvde3 c1xxg cnqgv cxbax">
          {/*-- Section header --*/}
          <div className="c5ymx calbx cdoe6 cmhb9 ccem0">
            <h2 className="cps50 cyb9k cdjn8">
              Build and style every element to perfection
            </h2>
            <p className="text-gray-600 c0atf czz36">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
              cupidatat.
            </p>
          </div>

          {/*-- Glow illustration --*/}
          <svg
            className="cey85 ck61j cnid1 cyc1q cgdju cs90m cn8c1 cgk3d cfrwd cvow7 codcr"
            aria-hidden="true"
            width="854"
            height="509"
            viewBox="0 0 854 509"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__a"
              >
                <stop stopColor="#667EEA" offset="0%"></stop>
                <stop stopColor="#667EEA" stopOpacity="0" offset="100%"></stop>
              </radialGradient>
              <radialGradient
                cx="50%"
                cy="50%"
                fx="50%"
                fy="50%"
                r="39.386%"
                id="iphonesill__b"
              >
                <stop stopColor="#9F7AEA" offset="0%"></stop>
                <stop stopColor="#9F7AEA" stopOpacity="0" offset="100%"></stop>
              </radialGradient>
            </defs>
            <g transform="translate(-64 -64)" fill="none" fillRule="evenodd">
              <circle
                fillOpacity=".64"
                fill="url(#iphonesill__a)"
                cx="300"
                cy="300"
                r="300"
              ></circle>
              <circle
                fillOpacity=".72"
                fill="url(#iphonesill__b)"
                cx="729"
                cy="384"
                r="240"
              ></circle>
            </g>
          </svg>

          {/*-- Items --*/}
          <div className="c63cx csd7z cf6cx cn6x8 cmjh8 c2k38 cmhb9 crcpd c74as">
            <div className="cxdxt czjaw c54sb cnc7y">
              <div
                aria-hidden="true"
                className="c6z3b cp2ws c1qo9 ckm3h cppwx ckfkh c3f8f cs90m cgk3d chb9f cfrwd c2osd"
                style={{
                  width: "calc(100% - 48px)",
                  left: "calc(50% + 48px)",
                  top: "24px",
                }}
              >
                <div className="cqy23 cs0c2 c737q cgk3d cnqgv c2ysc"></div>
              </div>
              <div className="text-white cidpy cv8tj ckzxk cw3my cxdxt cpz4m cmxal cf4hw c7tc4 cy5hl cnc7y cvo8b cfank">
                1
              </div>
              <div className="cw3my cxdxt czak8 czjaw">
                <img
                  className="cgk3d"
                  src="https://preview.cruip.com/appy/images/mockup-image-02.jpg"
                  width="290"
                  height="624"
                  alt="App screen 02"
                  style={{ maxWidth: "84.33%" }}
                />
                <img
                  className="cey85 cvjv9 czjaw cmhb9 cb1y1"
                  src="https://preview.cruip.com/appy/images/iphone-mockup.png"
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="cxdxt czjaw c54sb cnc7y">
              <div
                aria-hidden="true"
                className="c6z3b cp2ws c1qo9 ckm3h cppwx ckfkh c3f8f cs90m cgk3d chb9f cfrwd c2osd"
                style={{
                  width: "calc(100% - 48px)",
                  left: "calc(50% + 48px)",
                  top: "24px",
                }}
              >
                <div className="cqy23 cs0c2 c737q cgk3d cnqgv c2ysc"></div>
              </div>
              <div className="text-white cidpy cv8tj ckzxk cw3my cxdxt cpz4m cmxal cf4hw c7tc4 cy5hl cnc7y cvo8b cfank">
                2
              </div>
              <div className="cw3my cxdxt czak8 czjaw">
                <img
                  className="cgk3d"
                  src="https://preview.cruip.com/appy/images/mockup-image-03.jpg"
                  width="290"
                  height="624"
                  alt="App screen 03"
                  style={{ maxWidth: "84.33%" }}
                />
                <img
                  className="cey85 cvjv9 czjaw cmhb9 cb1y1"
                  src="https://preview.cruip.com/appy/images/iphone-mockup.png"
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div className="cxdxt czjaw c54sb cnc7y">
              <div className="text-white cidpy cv8tj ckzxk cw3my cxdxt cpz4m cmxal cf4hw c7tc4 cy5hl cnc7y cvo8b cfank">
                3
              </div>
              <div className="cw3my cxdxt czak8 czjaw">
                <img
                  className="cgk3d"
                  src="https://preview.cruip.com/appy/images/mockup-image-04.jpg"
                  width="290"
                  height="624"
                  alt="App screen 04"
                  style={{ maxWidth: "84.33%" }}
                />
                <img
                  className="cey85 cvjv9 czjaw cmhb9 cb1y1"
                  src="https://preview.cruip.com/appy/images/iphone-mockup.png"
                  width="344"
                  height="674"
                  alt="iPhone mockup"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
