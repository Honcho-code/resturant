import { useContext, useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => setProduct(response.data.products))
      .catch((error) => console.error("Error fatching products", error));
  }, []);
  if (products == 0) {
    return <p className="p-4 md:p-20 text-lg mt-20">Loading products...</p>;
  }
  const handleSearch = (event) => {
    event.preventDefault()
    if(searchTerm.trim() !== ''){
      navigate(`/search?q=${searchTerm}`)
    }
  };
  return (
    <div className="mt-20 mb-20">
      <form className="m-4 md:mx-20 flex items-center gap-3 border py-3 px-3 rounded" onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e)=>setSearchTerm(e.target.value)}
          placeholder="Search products"
          className="w-full h-full focus:outline-none text-[18px]"
        />
        <button className="bg-blue-700 p-1 text-white px-2 rounded ">
          {<FontAwesomeIcon icon={faSearch} />}
        </button>
      </form>
      <div className="flex justify-between p-4 md:px-20 ">
        <h2 className="text-xl font-semibold text-blue-700 md:text-2xl items-center">
          Best Products
        </h2>
      </div>
      <div className="flex flex-wrap gap-0 md:gap-5 justify-between">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            addToCart={addToCart}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
