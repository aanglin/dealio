import React, {useState} from "react";
import { HiSearch } from "react-icons/hi";



function SearchBar() {
  const [query, setQuery] = useState('');
  


  return (
    <>
    <div className="p-1 ml-5">
    <div className="relative flex items-center justify-center max-w-[700px] w-full m-auto pt-4 pb-3 z-10 ">
      <form
        className="flex justify-between items-center w-full m-auto p-3  bg-transparent border-2 border-[#195759] text-gray-400  rounded-2xl"
      >
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none text-[#195759] focus:outline-none text-xl placeholder:text-[#195759]"
            type="text"
            placeholder="Search for a recipe"
             value={query}
          />
        </div>
        <button>
          <HiSearch size={25} className="text-[#195759]" />
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default SearchBar;