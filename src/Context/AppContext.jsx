import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [balance, setBalance] = useState(5000);
  const [transaction, setTransaction] = useState([]);
  const [loan, setLoan] = useState({ status: "No Loan", amount: 0 });
  const [budget, setBudget] = useState({ limit: 1000, spent: 0 });

  return (
    <AppContext.Provider
      value={{
        balance,
        setBalance,
        transaction,
        setTransaction,
        loan,
        setLoan,
        budget,
        setBudget
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
