import React from "react";

const TransactionModal = ({
  isOpen,
  modalType,
  amount,
  setAmount,
  email,
  setEmail,
  description,
  setDescription,
  handleConfirm,
  handleClose,
}) => {
  if (!isOpen) return null;
  

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-5 w-full max-w-sm">
        <h3 className="text-lg font-semibold mb-4">
          {modalType === "send" ? "Send Money" : "Receive Money"}
        </h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full border rounded p-2 mb-4"
        />
        <input
          type="emal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border rounded p-2 mb-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border rounded p-2 mb-4"
        />
        <div className="flex justify-between">
            <button onClick={handleConfirm} className="bg-blue-700 text-white px-4 py-2 rounded">
            {modalType === "send" ? "Send Money" : "Receive Money"}
            </button>
            <button onClick={handleClose} className="bg-gray-300 text-gray-700 px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default TransactionModal;
