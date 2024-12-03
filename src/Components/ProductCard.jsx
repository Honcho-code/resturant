import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import {  toast } from 'react-toastify';


const ProductCard = ({ product }) => {
  const {addToCart, removeFromCart, isInCart} = useContext(CartContext)
  
  const handleAddToCart = ()=>{
    addToCart(product)
    toast.success("Item Added To Cart")

  }
  const handleRemoveFronCart = ()=>{
    removeFromCart(product)
    toast.info("Item Removed From Cart")
  }
  return (
    <div className="mx-4 md:mx-20">
      <div className="w-40 md:w-[230px] shadow-md px-3 py-5 mb-5 cursor-pointer">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-full h-40 md:h-40"
          />
          <h3 className="text-[16px] md:text-xl">
            {product.title.length > 20
              ? product.title.substring(0, 20) + "..."
              : product.title}
          </h3>
          <p className="text-xl font-bold my-3">${product.price}</p>
        </Link>
        
        <button
          onClick={isInCart(product.id) ? handleRemoveFronCart :handleAddToCart}
          className="w-full bg-orange-500 py-2 rounded text-white font-semibold text-[10px]"
        >
        {isInCart(product.id) ? 'REMOVE ITEM' : 'ADD TO CART '}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
