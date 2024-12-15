import {  faArrowUp, faArrowDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AllTransactionPage = () => {
  const [transactions, setTransactions] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    if(currentUser && Array.isArray(currentUser.transaction)){
      setTransactions(currentUser.transaction)
    }
  }, [])
  const handleTransactionClick = (index)=>{
    navigate(`/transaction/${index}`)
  }
  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="flex mb-4 items-center justify-between fixed gap-5 bg-white">
        <FontAwesomeIcon icon={faArrowLeft} onClick={() => navigate(-1)} className="p-2 bg-gray-300 text-gray-700 cursor-pointer rounded shadow-sm"/>
        <h1 className="text-lg font-semibold">All Transactions</h1>
      </div>
      {transactions.length > 0 ? (
        <ul className="space-y-4 mt-14">
          {transactions.slice().reverse().map((transaction, index) => {
            const actualIndex = transactions.length - 1 - index;
            return (<li
              key={actualIndex}
              className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm cursor-pointer"
              onClick={()=>handleTransactionClick(actualIndex)}
            >
              <div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon
                    icon={transaction.type === "Sent" ? faArrowUp : faArrowDown}
                    className={
                      transaction.type === "Sent"
                        ? "bg-red-200 text-red-700 p-2 rounded"
                        : "bg-green-200 text-green-700 p-2 rounded"
                    }
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {transaction.type}: ${transaction.amount.toFixed(2)}
                    </p>
                    <p className="text-xs text-gray-500">{transaction.email}</p>
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-400">{transaction.date}</span>
            </li>
            )
})}
        </ul>
      ) : (
        <p className="text-gray-500 tex-sm">No transaction yet.</p>
      )}
    </div>
  );
};

export default AllTransactionPage;
