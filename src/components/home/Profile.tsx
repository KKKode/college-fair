import { motion } from "framer-motion";

const IMAGE_ARR = [
  {
    _id: "8",
    img: "/home/image-8.png",
    style: "absolute -left-16 bottom-4",
    bgColor: "bg-[#FFF2ED]",
  },
  {
    _id: "7",
    img: "/home/image-7.png",
    style: "absolute left-20 bottom-12 border-8 border-white",
    bgColor: "bg-[#B1E3EE]",
  },
  {
    _id: "1",
    img: "/home/image-1.png",
    style: "absolute left-1/4 top-0",
    bgColor: "bg-[#B090B7]",
  },
  {
    _id: "2",
    img: "/home/image-2.png",
    style: "absolute left-[32%] bottom-0",
    bgColor: "bg-[#FAEFAC]",
  },
  {
    _id: "3",
    img: "/home/image-3.png",
    style: "absolute left-1/2 top-[10%]",
    bgColor: "bg-[#BBAFF1]",
  },
  {
    _id: "4",
    img: "/home/image-4.png",
    style: "absolute left-[57%] bottom-[10%] border-8 border-white",
    bgColor: "bg-[#FFBA23]",
  },
  {
    _id: "5",
    img: "/home/image-5.png",
    style: "absolute right-[8%] top-0",
    bgColor: "bg-[#E6FEA6]",
  },
  {
    _id: "6",
    img: "/home/image-6.png",
    style: "absolute -right-16 bottom-0",
    bgColor: "bg-[#93CAFF]",
  },
];

const fadeInUp = {
  initial: {
    opacity: 0,
    y: 100,
    x: -100,
  },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: 0.05 * i,
    },
  }),
};
const fadeInUpResponsive = {
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

const Profile = () => {
  return (
    <section className="w-full bottom-spacing">
      <div className="hidden lg:block relative h-[25rem] overflow-hidden">
        {IMAGE_ARR.map((item, i) => (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            key={item._id}
            className={`${item.style} ${item.bgColor} rounded-full w-48 h-48 grid place-items-center`}
          >
            <img src={item.img} alt="cartoon" className="" />
          </motion.div>
        ))}
      </div>
      <div className="lg:hidden grid grid-cols-2 place-items-center gap-4">
        {IMAGE_ARR.map((item) => (
          <motion.div
            variants={fadeInUpResponsive}
            initial="initial"
            whileInView="animate"
            key={item._id}
            className={`${item.bgColor} rounded-full w-40 h-40 grid place-items-center`}
          >
            <img src={item.img} alt="cartoon" className="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Profile;
