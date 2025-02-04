import { useEffect, useState } from "react";
import { fetchRandomMeals, searchMeals  } from "../api";

export default function RandomMeals() {
  const [meals, setMeals] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredMeals, setFilteredMeals] = useState([]);

  useEffect(() => {
    fetchRandomMeals(6).then((data) => {
      setMeals(data);
      setFilteredMeals(data); // Initialize filtered meals
    });
  }, []);

    // Handle search input changes
  const handleSearch = async (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    if (query === "") {
      setFilteredMeals(meals); // Reset to initial 6 random meals
    } else {
      const results = await searchMeals(query);
      setFilteredMeals(results.slice(0, 6)); // Show max 6 search results
    }
  };

  return (
    <div className="p-5 container" id="service">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="headline-2 mb-8">Explore Continental Dishes</h2>
        <input
          type="text"
          placeholder="Search meals..."
          value={search}
          onChange={handleSearch}
          className="p-2 rounded w-full mb-6 bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
        {filteredMeals.length > 0 ? (
          filteredMeals.map((meal) => (
            <div
              key={meal.idMeal}
              className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors"
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full rounded"
              />
              <h2 className="text-lg font-semibold mt-2">{meal.strMeal}</h2>
              <p className="text-sm">
                {meal.strCategory} - {meal.strArea}
              </p>
            </div>
          ))
        ) : (
          <p>No meals found</p>
        )}
      </div>
      <button
        onClick={() => fetchRandomMeals(6).then(data => {
          setMeals(data);
          setFilteredMeals(data);
          setSearch(""); // Clear search on refresh
        })}
        className="mb-4 px-4 py-2 bg-green-600 text-white rounded shadow hover:bg-blue-600"
      >
        Load More Dishes
      </button>
    </div>
  );
}
