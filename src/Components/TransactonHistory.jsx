import { icon } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactonHistory = ({ transactions }) => {
  const recentTransaction = transactions.slice(-8).reverse();
  const navigate = useNavigate()
  const handleTransactionClick = (index)=>{
    navigate(`/transaction/${index}`)
  }
  return (
    <div className=" mt-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Transaction History</h3>
        <p className="text-sm text-gray-500 underline cursor-pointer" onClick={()=>navigate("/transactions")}>Show all</p>
      </div>
      {transactions.length > 0 ? (
        <ul className="space-y-4">
          {recentTransaction.map((transaction, index) => {
            const actualIndex = transactions.length - 1 - index;
            return (
            <li
              key={actualIndex}
              className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm cursor-pointer"
              onClick={()=>handleTransactionClick(actualIndex)}
            >
              <div>
                <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={transaction.type === "Sent" ? faArrowUp : faArrowDown} className={transaction.type === "Sent" ? 'bg-red-200 text-red-700 p-2 rounded' : 'bg-green-200 text-green-700 p-2 rounded'}/>
                    <div>
                        <p className="text-sm font-medium">
                        {transaction.type}: ${transaction.amount.toFixed(2)}
                        </p>
                        <p className="text-xs text-gray-500">
                        {transaction.email}
                        </p>
                    </div>
                </div>
              </div>
              <span className="text-xs text-gray-400">{transaction.date}</span>
            </li>)
})}
        </ul>
      ) : (
        <p className="text-gray-500 tex-sm">No transaction yet.</p>
      )}
    </div>
  );
};

export default TransactonHistory;
