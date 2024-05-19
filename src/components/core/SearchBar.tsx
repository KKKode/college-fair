import { IoSearchOutline } from "react-icons/io5";
const SearchBar = ({ style }: { style: string }) => {
  return (
    <div className="w-full flex items-center justify-between gap-2 border border-primary rounded-[30px] px-4 py-2">
      <input
        id="search-input"
        type="text"
        placeholder="Search Topics"
        className="w-full outline-none"
      />
      <span className={`cursor-pointer rounded-full p-2 ${style}`}>
        <IoSearchOutline fontSize={20} />
      </span>
    </div>
  );
};

export default SearchBar;
