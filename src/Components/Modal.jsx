import React from "react";
import SuccesCheck from "./SuccesCheck";

const Modal = ({ isOpen, onClose, message, summery }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-11/12 md:w-2/3 rounded-lg shadow-lg transform transition-transform duration-300 scale-95">
        <div  className="p-4 md:p-20">
          <SuccesCheck/>
          <p className="text-center text-[18px] md:text-xl font-medium my-5">{message}</p>
          <button className="w-full mt-5 bg-orange-500 py-2 md:py-3 text-[16px] md:text-xl text-white rounded" onClick={onClose}>Keep Shopping</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
