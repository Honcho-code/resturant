import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../Context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBookmark,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart, removeFromCart, isInCart, addToWatchList, isInWatchList } =
    useContext(CartContext);
  const [product, setProduct] = useState(null);
  const [quntity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error("Error fatching product details", error));
  }, [id]);
  if (!product) {
    return <p className="p-4 md:p-20 text-lg">Loading product details...</p>;
  }
  const handleAddToCart = () => {
    addToCart(product, quntity);
    toast.success("Item Added To Cart");
  };
  const handleRemoveFronCart = () => {
    removeFromCart(product);
    toast.info("Item Removed From Cart");
  };

  return (
    <div className="p-4 md:p-20 mt-12">
      <FontAwesomeIcon
        icon={faArrowLeft}
        className=" hidden md:block mb-10  cursor-pointer bg-gray-200 p-3 rounded text-gray-600"
        onClick={goBack}
      />
      <div className="block md:flex gap-10 mt-5 items-center">
        <div className="flex justify-between items-center md:hidden mb-5">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="bg-gray-200 p-3 rounded text-gray-600"
            onClick={goBack}
          />
          <FontAwesomeIcon
            onClick={() => addToWatchList(product)}
            icon={faBookmark}
            className={`rounded p-3 ${
              isInWatchList(product.id)
                ? "bg-blue-200 text-blue-600"
                : "bg-gray-200 text-gray-600"
            }`}
          />
        </div>

        <img src={product.thumbnail} className="w-60 md:w-[30%] m-auto" />
        <div className="lg:w-[50%] ">
          <div className="flex justify-between mb-5">
            <h1 className="text-xl font-semibold md:text-2xl mt-5 md:mt-0 lg:text-3xl">
              {product.title}
            </h1>

            <FontAwesomeIcon
              onClick={() => addToWatchList(product)}
              icon={faBookmark}
              className={`hidden md:block cursor-pointer rounded p-3 ${
                isInWatchList(product.id)
                  ? "bg-blue-200 text-blue-600"
                  : "bg-gray-200 text-gray-600"
              }`}
            />
          </div>
          <p className="text-gray-600 text-[15px] md:text-xl lg:text-2xl my-3">
            {product.description}
          </p>
          <div className="flex justify-between items-center">
            <p className="text-[16px] md:text-xl lg:text-2xl">
              Category:{product.category}
            </p>
            <h3 className="text-xl font-semibold lg:text-2xl">
              ${product.price}
            </h3>
          </div>
          <div className="flex gap-4">
            <div className="flex gap-5 items-center">
              <FontAwesomeIcon
                icon={faMinus}
                className="p-2 border border-orange-500 rounded cursor-pointer"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              />
              <h2 className="font-semibold">{quntity}</h2>
              <FontAwesomeIcon
                icon={faPlus}
                className="p-2 border border-orange-500 rounded cursor-pointer"
                onClick={() => setQuantity((prev) => prev + 1)}
              />
            </div>
            <button
              className="w-full bg-orange-500 text-white py-3 my-5 font-semibold rounded"
              onClick={
                isInCart(product.id) ? handleRemoveFronCart : handleAddToCart
              }
            >
              {isInCart(product.id) ? "REMOVE ITEM" : "ADD TO CART "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
