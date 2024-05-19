import { CiSearch } from "react-icons/ci";

const JoinProgram = () => {
  return (
    <div className="flex items-center">
      <span className="rounded-full p-2 border-[6px] border-primary">
        <CiSearch />
      </span>

      <button className="relative btn-primary -ml-[1px]">
        Join Program
        <p className="w-2 h-4 bg-primary absolute -left-1 top-1/2 -translate-y-1/2"></p>
      </button>
    </div>
  );
};

export default JoinProgram;
