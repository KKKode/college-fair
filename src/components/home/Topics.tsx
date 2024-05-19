import { GoLightBulb } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { PiChats } from "react-icons/pi";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { SearchBar } from "../core";
import { motion } from "framer-motion";

interface ITopic {
  _id: string;
  img: string;
  title: string;
  author: string;
  response: number;
}
const TOPIC_ARR: ITopic[] = [
  {
    _id: "1",
    img: "/home/user-7.png",
    title: "What are the key principles of coding?",
    author: "Posted by Jishnu Ambadi",
    response: 12,
  },
  {
    _id: "2",
    img: "/home/user-6.png",
    title: "How does guide facilitate accurate medical billing?",
    author: "Posted by Sreelakshmi",
    response: 32,
  },
  {
    _id: "3",
    img: "/home/user-5.png",
    title: "What are the major sections within the guide?",
    author: "Posted by Ambili",
    response: 20,
  },
  {
    _id: "4",
    img: "/home/user-4.png",
    title: "How often is the guide updated?",
    author: "Posted by Farzana",
    response: 2,
  },
  {
    _id: "5",
    img: "/home/user-5.png",
    title: "What are the key principles of coding?",
    author: "Posted by Jishnu Ambadi",
    response: 12,
  },
  {
    _id: "6",
    img: "/home/user-6.png",
    title: "How does guide facilitate accurate medical billing?",
    author: "Posted by Sreelakshmi",
    response: 42,
  },
  {
    _id: "7",
    img: "/home/user-7.png",
    title: "What are the major sections within the guide?",
    author: "Posted by Ambili",
    response: 32,
  },
  {
    _id: "8",
    img: "/home/user-8.png",
    title: "How often is the guide updated?",
    author: "Posted by Farzana",
    response: 32,
  },
  {
    _id: "9",
    img: "/home/user-5.png",
    title: "What are the key principles of coding?",
    author: "Posted by Jishnu Ambadi",
    response: 12,
  },
  {
    _id: "10",
    img: "/home/user-6.png",
    title: "How does guide facilitate accurate medical billing?",
    author: "Posted by Sreelakshmi",
    response: 42,
  },
  {
    _id: "11",
    img: "/home/user-7.png",
    title: "What are the major sections within the guide?",
    author: "Posted by Ambili",
    response: 32,
  },
  {
    _id: "12",
    img: "/home/user-8.png",
    title: "How often is the guide updated?",
    author: "Posted by Farzana",
    response: 32,
  },
  {
    _id: "13",
    img: "/home/user-7.png",
    title: "What are the major sections within the guide?",
    author: "Posted by Ambili",
    response: 32,
  },
  {
    _id: "14",
    img: "/home/user-8.png",
    title: "How often is the guide updated?",
    author: "Posted by Farzana",
    response: 32,
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
      delay: 0.06 * i,
    },
  }),
};

const Topics = () => {
  return (
    <section className="main-container flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 top-spacing bottom-spacing">
      <aside className="w-full lg:w-[70%] flex flex-col gap-8">
        <div className="w-full flex items-center justify-between">
          <p className="space-x-2 text-xs uppercase">
            <span>Latest discussion as of</span>
            <span className="px-3 py-[1px] bg-rose-700"></span>
            <span className="font-medium">March 12 2024</span>
          </p>
          <p className="flex items-center gap-2 bg-sky-500/20 px-4 py-2 rounded-3xl uppercase text-[11px] font-medium">
            <span className="text-sky-500">
              <GoLightBulb fontSize={16} />
            </span>
            All Topics <IoIosArrowDown fontSize={16} />
          </p>
        </div>
        <SearchBar style="bg-white text-primary" />
        <div className="flex flex-col gap-4">
          {TOPIC_ARR.map((item, i) => (
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              custom={i}
              key={item._id}
            >
              <TopicCard item={item} />
            </motion.div>
          ))}
        </div>
      </aside>
      <aside className="w-full lg:w-[30%] flex flex-col gap-8 lg:gap-12">
        <div className=" bg-[#FEF4EC]">
          <div className="flex flex-col items-center text-center gap-6 px-4 py-10 border-b border-gray-300">
            <h3 className="text-xl md:text-2xl font-semibold">
              Top Contributor <br /> This Week
            </h3>
            <div className="relative w-full flex justify-center">
              <img src="/home/boy-with-books.png" alt="boy-with-book" />
              <img
                src="/home/text-1.png"
                alt="text"
                className="absolute z-10 top-6 left-0"
              />
              <img
                src="/home/text-2.png"
                alt="text"
                className="absolute z-10 bottom-[40%] right-0"
              />
            </div>
            <h3 className="text-xl font-medium">Jishnu Ambadi</h3>
          </div>
          <div className="px-4 py-10 space-y-4">
            <p>
              You can be next one! Be a part of USA’s 1st CPT Program Directory!
            </p>
            <div className="w-full flex justify-center">
              <button className="w-4/5 tracking-wide capitalize bg-gradient-to-tr from-[#6F213E] via-[#3B0D70] to-primary hover:bg-slate-900 text-white rounded-[30px] common-transition py-4">
                Join Community & Ask
              </button>
            </div>
          </div>
        </div>
        <div className="relative bg-[#19122C] px-4 py-10 text-white">
          <div className="relative z-10 flex flex-col items-center gap-4 text-center">
            <img src="/home/smiling-man.png" alt="smiling-man" />
            <p className="text-sm uppercase pt-4">E-Book</p>
            <p className="text-xl font-semibold">
              Charting Paths:Program Through a {`Student's`} Eyes
            </p>
            <button className="flex items-center gap-4 border border-white rounded-[30px] px-7 py-2">
              Get the guide <MdOutlineArrowRightAlt />
            </button>
          </div>
          <img
            src="/home/mask.png"
            alt="gradient-image"
            className="absolute bottom-0 left-0 w-full z-[5]"
          />
        </div>
      </aside>
    </section>
  );
};

export default Topics;

const TopicCard = ({ item }: { item: ITopic }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-gray-300 pb-4">
      <div className="flex items-center gap-4">
        <img src={item.img} alt="user" className="" />
        <div className="space-y-1">
          <p className="text-lg font-medium">{item.title}</p>
          <p className="text-xs tracking-wider text-gray-500">{item.author}</p>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4">
        <div className="flex items-center gap-1 px-4 py-3 uppercase text-[10px] tracking-wide rounded-3xl bg-purple-500/10">
          <span className="text-pink-500">
            <PiChats fontSize={16} />
          </span>
          {item.response} Responses
        </div>
        <button className="text-sm tracking-wide capitalize bg-primary hover:bg-slate-900 text-white rounded-md common-transition px-6 py-2.5">
          View Answer
        </button>
      </div>
    </div>
  );
};
