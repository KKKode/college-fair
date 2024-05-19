import React from "react";
import { SearchBar } from "../core";
import { BsChatLeftDots } from "react-icons/bs";
import { GoLightBulb } from "react-icons/go";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03,
    },
  },
};

const fadeLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05,
      duration: 0.3,
    },
  },
};

const fadeRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.07,
      duration: 0.3,
    },
  },
};

const Hero = () => {
  return (
    <section className="main-container top-spacing bottom-spacing flex flex-col items-center text-center gap-4 overflow-hidden">
      <motion.p
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        className="text-sm uppercase"
      >
        Forum
      </motion.p>
      <motion.h2
        variants={fadeLeft}
        initial="initial"
        whileInView="animate"
        className="title"
      >
        Discuss & Evolve
      </motion.h2>
      <motion.p variants={fadeRight} initial="initial" whileInView="animate">
        Engage with Fellow Professionals: Join the Program Forum Discussion!
      </motion.p>
      <motion.div
        // variants={fadeInUp}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
          },
        }}
        className="w-full lg:w-1/2"
      >
        <SearchBar style="bg-primary text-white" />
      </motion.div>
      <div className="flex items-center gap-6 pt-8">
        <p className="flex items-center gap-2 uppercase text-sm">
          <span className="px-6 py-2.5 rounded-[30px] bg-pink-500/30 text-pink-500">
            <BsChatLeftDots fontSize={16} />
          </span>
          Start Discussing
        </p>
        <p className="tracking-wide capitalize w-1.5 h-1.5 rounded-full bg-primary/70"></p>
        <p className="flex items-center gap-2 uppercase text-sm">
          <span className="px-6 py-2.5 rounded-[30px] bg-sky-500/30 text-sky-500">
            <GoLightBulb fontSize={18} />
          </span>
          View Topics
        </p>
      </div>
    </section>
  );
};

export default Hero;
