import { BsChatLeftDots } from "react-icons/bs";
import { motion } from "framer-motion";
const FEATURE_ARR = [
  {
    _id: "1",
    text: "Elibility",
  },
  {
    _id: "2",
    text: "F1 Visa Students",
  },
  {
    _id: "3",
    text: "Universities",
  },
  {
    _id: "4",
    text: "Admission",
  },
  {
    _id: "5",
    text: "Companies",
  },
  {
    _id: "6",
    text: "Jobs",
  },
];

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};

const Feature = () => {
  return (
    <section className="bg-[#FFF8E2] py-10 md:py-16 lg:py-20">
      <div className="flex flex-col items-center gap-2 text-center pb-6 md:pb-8 lg:pb-10">
        <p className="text-sm uppercase">Topics</p>
        <h2 className="title">Most Searched One</h2>
      </div>
      <aside className="main-container w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6 md:pb-8 lg:pb-10">
        {FEATURE_ARR.map((item, i) => (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            custom={i}
            key={item._id}
            className="group relative h-32 flex items-center justify-center rounded-lg bg-gradient-to-tr from-primary to-slate-900 overflow-hidden"
          >
            <p className="relative z-10 text-xl tracking-wider text-white capitalize">
              {item.text}
            </p>
            <img
              src="/home/gradient-image.png"
              alt="gradient-image"
              className="absolute z-[5] w-full h-full top-full right-full group-hover:top-0 group-hover:right-0 transition-all duration-300 ease-in-out"
            />
          </motion.div>
        ))}
      </aside>
      <div className="flex items-center justify-center gap-4">
        <p>Didn’t find your topic?</p>
        <p className="flex items-center gap-2 italic">
          <span className="text-pink-500">
            <BsChatLeftDots />
          </span>
          Start discussing
        </p>
      </div>
    </section>
  );
};

export default Feature;
