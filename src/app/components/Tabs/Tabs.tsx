"use client";

import React, { useState, useEffect } from "react";
import tabs from "../../../../data/tabData.json";

const Tabs = () => {
  const [category, setCategory] = useState("1");
  const [activeButton, setActiveButton] = useState("1");

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
    setCategory(buttonId); // Set category based on button clicked
  };

  useEffect(() => {
    if (tabs.buttons.length > 0) {
      const firstButtonId = tabs.buttons[0].id;
      setCategory(firstButtonId);
      setActiveButton(firstButtonId);
    }
  }, [tabs]);

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
              {tabs.buttons.map((button) => (
                <button
                  key={button.id}
                  id={`button${button.id}`}
                  className={`criy0 cw3my cxdxt clq5w cf4hw ccb29 ceo83 cw81f cmcbz ceg5n cszwl cnc7y c5mw1 ci4w1 cimjo c6zr7  cj3dx cocu3 ${
                    activeButton === button.id
                      ? "bg-teal-500 c7uhb ckzxk c9xdy cidpy ccnjx dark:bg-[rgb(49 151 149/var(--tw-bg-opacity))]"
                      : "c6zr7 cco8t cj3dx cocu3"
                  }`}
                  onClick={() => handleButtonClick(button.id)}
                  style={{ letterSpacing: "normal" }}
                >
                  <svg
                    className="c2npy cui34 ckyke cca3l"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={`c4u31 ${
                        activeButton === button.id
                          ? "text-teal-200 cv8tj dark:text-[rgb(79 209 197)]"
                          : "text-teal-500 dark:text-[rgb(162 162 168)] c0atf"
                      }`}
                      d="M5 16H4a4 4 0 01-4-4v-1h2v1a2 2 0 002 2h1v2zM13 10h-1.686l-1.207-1.207L14.37 4.63a2.121 2.121 0 00-3-3L7.207 5.793 5.99 4.576 5.98 3.02 3.038.079 0 3.117 3 6h1.586l1.207 1.207L4 9l3 3 1.793-1.793L10 11.414V13l3.01 3.01 2.98-2.979L13 10z"
                    ></path>
                  </svg>
                  <span
                    className={`${
                      activeButton === button.id
                        ? "text-white dark:text-customTeal"
                        : "text-gray-600 dark:text-customGrey"
                    }`}
                  >
                    {button["button-title"]}
                  </span>
                </button>
              ))}
            </div>

            {/*---- Videos --*/}
            <div className="cjyhr c04nn cdzyi c2k38 cmhb9">
              <div className="co9sm cbv7r c74as">
                {tabs.tabpanes.map(
                  (tabpan) =>
                    tabpan.category.includes(category) && (
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
                            <a
                              className="cmemh clq5w ccb29 ceo83"
                              href={tabpan.href}
                            >
                              <img
                                src="https://preview.cruip.com/appy/images/play-button.svg"
                                width="72"
                                height="72"
                                alt="Play icon"
                              />
                            </a>
                          </div>
                          <div className="cdmud ctiy6 cxdxt cq7h5 c35ck c6zr7 cs8sl cnc7y c4bes cgcis">
                            <a className="c0atf c8d3u cf4hw" href={tabpan.href}>
                              {tabpan.title}
                            </a>
                            <div className="text-white cidpy cv8tj ckzxk cbnia cpz4m czak8 cutri cf4hw cqmyn c5mw1 cy8r3">
                              {tabpan.time} Min
                            </div>
                          </div>
                        </div>
                      </div>
                    )
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
