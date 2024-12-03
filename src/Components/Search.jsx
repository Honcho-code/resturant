import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faLeftLong } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");
  const [Products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (query) {
      axios
        .get(`https://dummyjson.com/products/search?q=${query}`)
        .then((response) => {
          setProducts(response.data.products || []);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fatching serach results", error);
          setProducts([]);
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="mt-20">
      <div className="p-4 md:p-20 flex flex-row items-center gap-5">
        <Link to={"/"}>
          <FontAwesomeIcon icon={faArrowLeft} className="bg-gray-200 p-3 rounded text-gray-600"/>
        </Link>
        <h2 className="text-center font-bold md:text-start md:text-xl">
          Search Results for "{query}"
        </h2>
      </div>
      {loading ? (
        <p className="p-4 md:p-20 text-lg">Loading Search Results...</p>
      ) : (
        <div className="flex flex-wrap gap-0 md:gap-5 justify-between">
          {Products.length > 0 ? (
            Products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="absolute top-[50%] left-[50%] translate-x-[-50%] text-xl">
              No products found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
