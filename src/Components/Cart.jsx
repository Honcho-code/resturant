import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { removeFromCart, cartItems, updateQuantity, setCartItems } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const calculateSummery = () => {
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return {
      items: cartItems,
      total,
    };
  };
  const handleCheckout = () => {
    setCartItems([])
    setIsModalOpen(true);
    setTimeout(() => {
      setIsModalOpen(false);
      navigate("/");
    }, 9000);
  };
  return (
    <div className="m-4 md:mx-24 mt-20">
      <h2 className="text-center font-bold md:text-start md:text-xl mb-5">
        Your Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="flex place-content-center ">Your cart is Empty</p>
      ) : (
        <div className="block md:flex lg:justify-start md:justify-between gap-4 flex-wrap">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="w-full shadow-md border block md:flex mt-4 rounded md:w-48"
            >
              <div className="flex justify-between md:block py-4 px-5 items-center">
                <div className="flex gap-3 md:block items-center">
                  <img
                    src={item.thumbnail}
                    className="w-16 md:w-44 md:h-44 rounded md:mb-5"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-lg md:text-xl md:font-light">
                      {item.title.length > 20
                        ? item.title.substring(0, 20) + "..."
                        : item.title}
                    </p>
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-5 md:flex-row md:items-center mt-4 md:justify-between">
                  <FontAwesomeIcon
                    icon={faTrashCan}
                    onClick={() => removeFromCart(item)}
                    className="text-xl text-red-500"
                  />
                  <div className="flex gap-3 items-center">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="p-2 border border-orange-500 rounded cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    />
                    <input
                      className="font-semibold w-5 text-center md:w-9"
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        updateQuantity(
                          item.id,
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                    />
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="p-2 border border-orange-500 rounded cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div
        className={`${
          cartItems.length === 0 ? "hidden" : "block"
        } lg:w-[40%] lg:m-auto lg:mt-20`}
      >
        <div className="flex justify-between mt-10 items-center">
          <h3 className="text-xl font-medium">Total:</h3>
          <p className="text-xl text-orange-500 font-semibold">
            $
            {cartItems
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}
          </p>
        </div>
        <button
          className="w-full mt-5 rounded bg-orange-500 p-3 text-white font-semibold"
          onClick={handleCheckout}
        >
          CheckOut
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Your checkout is complete! Thanks for shopping with us."
        summery={calculateSummery}
      />
    </div>
  );
};

export default Cart;
