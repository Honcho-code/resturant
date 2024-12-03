import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Navbar = () => {
  const [showMobile, setShowMobile] = useState(false);
  return (
    <>
      <div className="flex justify-between p-4 md:px-20 bg-white shadow-md w-full items-center z-10 top-0 fixed ">
        <Link to='/'>
          <h1 className="text-2xl font-bold text-blue-900 md:text-3xl">
            Best{" "}
            <span className="underline underline-offset-1 font-thin text-orange-600">
              Buy.
            </span>
          </h1>
        </Link>
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-[18px] text-gray-600">
            Home
          </Link>
          <Link to="/cart" className="text-[18px] text-gray-600">
            Cart
          </Link>
          <Link to="/watchList" className="text-[18px] text-gray-600">
            Watchlist
          </Link>
        </div>

        {/* mobile menu icon control */}
        <div className="flex gap-10 md:hidden ">
          <Link to="/cart">
            <FontAwesomeIcon icon={faBagShopping} className="text-[18px]" />
          </Link>

          {showMobile ? (
            <FontAwesomeIcon
              icon={faClose}
              onClick={() => setShowMobile(!showMobile)}
              className="text-[20px]"
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setShowMobile(!showMobile)}
              className="text-[20px]"
            />
          )}
        </div>
      </div>
      <div
        className={`${
          showMobile ? "block" : "hidden"
        } block top-0 md:hidden bg-blue-600 w-full transition-all mt-16 mb-0`}
      >
        <div className="flex flex-col gap-5 text-center py-5 text-white">
          <Link to="/" className=" " onClick={()=>setShowMobile(false)}>
            <p>Home</p>
          </Link>
          <Link to="/watchList" className=" " onClick={()=>setShowMobile(false)}>
            <p>WatchList</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
