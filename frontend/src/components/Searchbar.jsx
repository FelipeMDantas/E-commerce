import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return (
    <div className="border-t border-b bg-gray-50 text-center">
      <div
        className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 
      rounded-full w-3/4 sm:w-1/2"
      >
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Searchbar;
