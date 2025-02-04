// import axios from "axios";

// const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

// export const fetchRandomMeals = async (count = 6) => {
//   try {
//     const mealRequests = Array.from({ length: count }, () =>
//       axios.get(`${BASE_URL}/random.php`)
//     );

//     const responses = await Promise.all(mealRequests);
//     return responses.map(res => res.data.meals[0]); // Extract meals from responses
//   } catch (error) {
//     console.error("Error fetching random meals:", error);
//     return [];
//   }
// };

import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

/**
 * Fetch 6 random meals.
 */
export const fetchRandomMeals = async (count = 6) => {
  try {
    const mealRequests = Array.from({ length: count }, () =>
      axios.get(`${BASE_URL}/random.php`)
    );

    const responses = await Promise.all(mealRequests);
    return responses.map((res) => res.data.meals[0]); // Extract meals
  } catch (error) {
    console.error("Error fetching random meals:", error);
    return [];
  }
};

/**
 * Search meals from TheMealDB API by name.
 */
export const searchMeals = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.php?s=${query}`);
    return response.data.meals || []; // Return meals or empty array
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
};
