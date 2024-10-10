"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const itemVariants = (delay: number) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation once

  return (
    <section id="features" className="">
      <div className="czd2q c92f3 cmhb9 c1plj">
        <div className="cq8p6 cvde3 c1xxg cnqgv cxbax">
          {/*-- Section header --*/}
          <div className="c5ymx calbx cdoe6 cmhb9 ccem0">
            <h2 className="cps50 cdjn8">
              Put clarity at the center of your website
            </h2>
          </div>

          {/*-- Items --*/}
          <div
            className="clyfp cdxx5 crfqu c04nn c1xn5 cy220 c3t8k cmhb9 c5v0a c74as"
            data-aos-id-featbl=""
          >
            {/*-- 1st item --*/}
            <motion.a
              className="text-white cgplj cxwxu cssaq cct02 ch76r c54sb ccqhl cnc7y ccgug"
              href="#0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"} // Animate based on inView status
              variants={itemVariants(0)}
              custom={0}
            >
              <svg
                className="cyws0 csz25 cchtt"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M19 18.414l-4 4L9.586 17l.707-.707L12 14.586V8.414l-5-5L4.414 6l6.293 6.293-1.414 1.414L1.586 6 7 .586l7 7v5l8.463-8.463a3.828 3.828 0 115.414 5.414L21 16.414v6.172l5 5L28.586 25l-6.293-6.293 1.414-1.414L31.414 25 26 30.414l-7-7v-5zm-4 1.172L26.463 8.123a1.828 1.828 0 10-2.586-2.586L12.414 17 15 19.586zM11 30v2C4.925 32 0 27.075 0 21h2a9 9 0 009 9zm0-5v2a6 6 0 01-6-6h2a4 4 0 004 4z"
                  fillRule="nonzero"
                ></path>
              </svg>
              <div className="cps50 ckyqm c21u3 czz36 ccipq">
                Simpler Sharing
              </div>
              <div className="cvshg cyb9k c2h4q">
                Lorem ipsum dolor amet sit consect adipiscing.
              </div>
              <svg
                className="ca6it crgjb clq5w ccb29 ceo83 cgdju c1xg5 cr68y cj7c4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                ></path>
              </svg>
            </motion.a>

            {/*-- 2nd item --*/}
            <motion.a
              className="text-white cf0yc cgplj c65d8 cppj5 ch76r c54sb ccqhl cnc7y ccgug"
              href="#0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants(0.1)}
              custom={1}
            >
              <svg
                className="cyws0 csz25 cchtt"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M20.796 20l-1.677 7.264a6 6 0 01-7.302 4.471L0 28.781V11.54l.35-.3 9.457-8.107a3.751 3.751 0 015.29 5.29L11.175 13H28.5a3.5 3.5 0 012.6 1.156c.663.736.984 1.72.878 2.74-.252 1.808-1.817 3.143-3.622 3.104h-7.56zM2 27.22l10.303 2.575a4 4 0 004.868-2.98L19.204 18h9.173c.812.018 1.508-.575 1.615-1.345A1.5 1.5 0 0028.5 15H11.173a2 2 0 01-1.517-3.3l3.922-4.577a1.755 1.755 0 00-.597-2.733 1.751 1.751 0 00-1.872.262L2 12.46v14.76zM28 .585L29.414 2 23 8.414 21.586 7 28 .585zm-8.272 6.627l-1.94-.485 1.484-5.94 1.94.484-1.484 5.94zm3.544 5l-.485-1.94 5.94-1.486.486 1.94-5.94 1.486z"
                  fillRule="nonzero"
                ></path>
              </svg>
              <div className="cps50 ckyqm c21u3 czz36 ccipq">
                Simpler Sharing
              </div>
              <div className="cvshg cyb9k c2h4q">
                Lorem ipsum dolor amet sit consect adipiscing.
              </div>
              <svg
                className="ca6it crgjb clq5w ccb29 ceo83 cgdju c1xg5 cr68y cj7c4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                ></path>
              </svg>
            </motion.a>

            {/*-- 3rd item --*/}
            <motion.a
              className="text-white cjrbh cgplj cykzy cn0r1 ch76r c54sb ccqhl cnc7y ccgug"
              href="#0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants(0.2)}
              custom={2}
            >
              <svg
                className="cyws0 csz25 cchtt"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M19 5.612V25a6 6 0 11-2-4.472V0h2v2.961A5.98 5.98 0 0023.497 5a8.476 8.476 0 018.444 9.474l-.253 2.13-1.469-1.563A6.472 6.472 0 0025.5 13c-1.842 0-3.634-.6-5.103-1.713l1.206-1.594A6.455 6.455 0 0025.5 11c1.557 0 3.068.428 4.376 1.217A6.475 6.475 0 0023.5 7 7.981 7.981 0 0119 5.612zM13 29a4 4 0 100-8 4 4 0 000 8zM0 5V3h14v2H0zm0 5V8h14v2H0zm0 5v-2h14v2H0z"
                  fillRule="nonzero"
                ></path>
              </svg>
              <div className="cps50 ckyqm c21u3 czz36 ccipq">
                Simpler Sharing
              </div>
              <div className="cvshg cyb9k c2h4q">
                Lorem ipsum dolor amet sit consect adipiscing.
              </div>
              <svg
                className="ca6it crgjb clq5w ccb29 ceo83 cgdju c1xg5 cr68y cj7c4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                ></path>
              </svg>
            </motion.a>
            <motion.a
              className="text-white cgplj cyfvj chrd2 cxp5i ch76r c54sb ccqhl cnc7y ccgug aos-init aos-animate"
              href="#0"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={itemVariants(0.3)}
              custom={2}
            >
              <svg
                className="cyws0 csz25 cchtt"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M20.243 6.757l.707.707-1.414 1.414-.707-.707a4 4 0 00-5.658 0l-.707.707-1.414-1.414.707-.707a6 6 0 018.486 0zm3.535-3.535l.707.707-1.414 1.414-.707-.707a9 9 0 00-12.728 0l-.707.707L7.515 3.93l.707-.707c4.296-4.296 11.26-4.296 15.556 0zM9 17.212V16a7 7 0 00-7-7H1V7h1a9 9 0 019 9v.788l2.302 5.18L11 23.117V24a4 4 0 01-4 4H5v3H3v-5h4a2 2 0 002-2v-2.118l1.698-.85L9 17.213zm12-.424V16a9 9 0 019-9h1v2h-1a7 7 0 00-7 7v1.212l-1.698 3.82 1.698.85V24a2 2 0 002 2h4v5h-2v-3h-2a4 4 0 01-4-4v-.882l-2.302-1.15L21 16.787zM16 12a1 1 0 110-2 1 1 0 010 2z"
                  fillRule="nonzero"
                ></path>
              </svg>
              <div className="cps50 ckyqm c21u3 czz36 ccipq">
                Simpler Sharing
              </div>
              <div className="cvshg cyb9k c2h4q">
                Lorem ipsum dolor amet sit consect adipiscing.
              </div>
              <svg
                className="ca6it crgjb clq5w ccb29 ceo83 cgdju c1xg5 cr68y cj7c4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="c4u31"
                  d="M13 11V5.057L22.72 12 13 18.943V13H2v-2h11zm2 4.057L19.28 12 15 8.943v6.114z"
                ></path>
              </svg>
            </motion.a>
          </div>
          <div ref={ref}></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
