import { IoIosMenu } from "react-icons/io";
import { CiChat1 } from "react-icons/ci";
import { JoinProgram } from "@/components/core";

const StickyNav = () => {
  return (
    <nav className="hidden w-full lg:flex justify-center z-[999] sticky top-4 bg-transparent">
      <div className="w-full lg:w-3/5 flex items-center justify-between gap-4 bg-transparent h-20 px-8 border border-gray-300 rounded-md backdrop-blur-lg">
        <img src="/logo.svg" alt="logo" className="" />
        <div className="flex items-center gap-4">
          <button className="h-fit flex items-center gap-2 tracking-wide capitalize bg-primary hover:bg-slate-900 text-white rounded-[30px] common-transition px-4 py-2">
            <IoIosMenu fontSize={20} /> Menu
          </button>
          {/* <button className="h-fit text-sm flex items-center gap-2 tracking-wide capitalize border-2 border-primary text-primary rounded-[30px] common-transition px-4 py-2">
            <CiChat1 fontSize={16} /> Discuss CPT
          </button> */}
          <button className="flex items-center gap-2 gradient-btn">
            {/* <span> */}
            <CiChat1 fontSize={16} /> Discuss CPT
            {/* </span> */}
          </button>
        </div>
        <JoinProgram />
      </div>
    </nav>
  );
};

export default StickyNav;
