import React from "react";
import HomeProducts from "./homeProducts";
function homeCards({ results }) {
  const categoriesNames = [...new Set(results.map((p) => p.category))];
  return (
    <div className="p-5">
      <div>
        {categoriesNames.map((categoryName) => (
          <div key={categoryName}>
            <h1 className="flex justify-center py-2 text-2xl font-bold capitalize">
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
        ))}
        <div className="py-4 px-5 "></div>
      </div>
    </div>
  );
}

export default homeCards;
