import { IoIosMenu } from "react-icons/io";
import { JoinProgram } from "@/components/core";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="hidden lg:block relative z-[9999] -mt-20 py-6 bg-white w-full shadow-sm">
        <section className="main-container flex items-center justify-between">
          <img src="/logo.svg" alt="logo" className="" />
          <ul className="flex items-center gap-4">
            <li className="tracking-wide capitalize">Learn</li>
            <li className="tracking-wide capitalize w-1.5 h-1.5 rounded-full bg-primary/70"></li>
            <li className="tracking-wide capitalize">How do i participate?</li>
            <li className="tracking-wide capitalize w-1.5 h-1.5 rounded-full bg-primary/70"></li>
            <li className="tracking-wide capitalize">Universities</li>
            <li className="tracking-wide capitalize w-1.5 h-1.5 rounded-full bg-primary/70"></li>
            <li className="tracking-wide capitalize">Corporate</li>
          </ul>
          <JoinProgram />
        </section>
      </nav>
      <nav className="lg:hidden sticky z-[9999] top-0 py-4 bg-white shadow-md">
        <div className="main-container flex items-center justify-between gap-4">
          <img src="/logo.svg" alt="logo" className="" />
          <button onClick={() => setOpen((prev) => !prev)}>
            <IoIosMenu fontSize={28} />
          </button>
        </div>
        <div
          className={`animate-collapse grid common-transition ease-in-out ${
            open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr] "
          }`}
        >
          <ul className="flex flex-col gap-4 pl-4 overflow-hidden">
            <li className="tracking-wide capitalize">Learn</li>
            <li className="tracking-wide capitalize">How do i participate?</li>
            <li className="tracking-wide capitalize">Universities</li>
            <li className="tracking-wide capitalize">Corporate</li>
            <JoinProgram />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
