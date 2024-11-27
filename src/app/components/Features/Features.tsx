"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import items from "../../../../data/featuresData.json";

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
            {items.map((item) => (
              <motion.a
                key={item.id}
                className={`text-white cgplj ch76r c54sb ccqhl cnc7y ccgug ${item.className}`}
                href="#0"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"} // Animate based on inView status
                variants={itemVariants(item.variantDelay)}
                custom={item.custom}
              >
                <svg
                  className="cyws0 csz25 cchtt"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="c4u31"
                    d={item.path}
                    fillRule="nonzero"
                  ></path>
                </svg>
                <div className="cps50 ckyqm c21u3 czz36 ccipq">
                  {item.title}
                </div>
                <div className="cvshg cyb9k c2h4q">{item.description}</div>
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
            ))}
          </div>
          <div ref={ref}></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
