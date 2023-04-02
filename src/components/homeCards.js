import {React,useState} from "react";
import { HiSearch } from "react-icons/hi";
import HomeProducts from "./HomeProducts";



function homeCards({ results }) {
  const [query, setQuery] = useState('');

  const categoriesNames = [...new Set(results.map((p) => p.category))];
  if (query) {
    results = results.filter(p => p.title.toLowerCase().includes(query))
  }else {
    results = results
  }
  return (
    <div className="p-5">
      <div className="p-5 ml-5">
    <div className="relative flex items-center justify-center max-w-[700px] w-full m-auto pt-4 pb-9 z-10 ">
      <form
        className="flex justify-between items-center w-full m-auto p-3  bg-transparent border-2 border-[#195759] text-gray-400  rounded-2xl"
      >
        <div>
          <input
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none text-[#195759] focus:outline-none text-xl placeholder:text-[#195759]"
            type="text"
            placeholder="Find the Dealio"
             value={query}
          />
        </div>
        <button>
          <HiSearch size={25} className="text-[#195759]" />
        </button>
      </form>
    </div>
    </div>
      <div className="py-9">
        {categoriesNames.map(categoryName => (
          <div key={categoryName}>
            {results.find(p => p.category === categoryName) && (
              <div>
            <h1 id={categoryName.toLowerCase()} className="flex justify-center py-2 text-2xl font-bold capitalize">
              {categoryName}
            </h1>
            <div className="flex overflow-x-scroll snap-x scrollbar-hide px-9 p-9">
            {results
              .filter((p) => p.category === categoryName)
              .map((results) => (
                <div key={results._id} className="px-[4rem] snap-start">
                  <HomeProducts {...results} />
                </div>
              ))}
              </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default homeCards;
