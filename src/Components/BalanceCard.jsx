import {
  faCircleArrowDown,
  faCircleArrowUp,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import TransactionModal from "./TransactionModal";
import TransactonHistory from "./TransactonHistory";
import BottomNav from "./BottomNav";

const BalanceCard = ({ handleLogout }) => {
  const [Balance, setBalance] = useState(5000);
  const [isHidden, setIsHidden] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [notifications, setNotifications] = useState([]);

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  // useEffect(()=>{
  //   if(currentUser?.transactions){
  //     setTransactions(currentUser.transactions)
  //   }
  //   if(currentUser?.Balance){
  //     setBalance(currentUser.Balance)
  //   }
  // }, [currentUser])

  useEffect(() => {
    if (currentUser) {
      setTransactions(currentUser.transaction || []);
      setBalance(currentUser.Balance || 5000);
    }
  }, []);

  const toggleVisibility = () => {
    setIsHidden(!isHidden);
  };
  const openModal = (type) => {
    setModalType(type);
    setAmount("");
    setEmail(currentUser?.email || "");
    setDescription("");
  };
  const closeModal = () => {
    setModalType(null);
  };

  const handleTransaction = () => {
    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      alert("Please Enter a valid amount to add.");
      return;
    }
    if (modalType === "send" && amountValue > Balance) {
      alert("Insufficient balance!");
      return;
    }
    const updateBalance =
      modalType === "send" ? Balance - amountValue : Balance + amountValue;

    const transaction = {
      type: modalType === "send" ? "Sent" : "Received",
      amount: amountValue,
      email,
      description,
      date: new Date().toDateString(),
    };
    const updateTransactions = [...transactions, transaction];
    setTransactions(updateTransactions);

    const notification = {
      message:
        modalType === "send"
          ? `You sent $${amountValue} to ${email}`
          : `You received $${amountValue}`,
      date: new Date().toDateString(),
    };
    const updatedNotification = [...notifications, notification];
    setNotifications(updatedNotification);

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === currentUser.email
        ? {
            ...user,
            Balance: updateBalance,
            transaction: updateTransactions,
            notification: updatedNotification,
          }
        : user
    );

    localStorage.setItem("users", JSON.stringify(updatedUsers));

    const updatedCurrentUser = {
      ...currentUser,
      Balance: updateBalance,
      transaction: updateTransactions,
      notification: updatedNotification,
    };

    localStorage.setItem("currentUser", JSON.stringify(updatedCurrentUser));
    setBalance(updateBalance);
    closeModal();
  };
  return (
    <>
      <div className="bg-blue-700 shadow-md rounded-md p-4 w-full max-w-md mx-auto">
        <div className="flex items-center gap-3">
          <h2 className="text-[14px] text-white">Current Balance</h2>
          <FontAwesomeIcon
            icon={faEye}
            className="text-[14px] text-white cursor-pointer"
            onClick={toggleVisibility}
          />
        </div>
        <div>
          <h1 className="text-white text-3xl my-3 font-medium">
            {isHidden ? "*****" : `$${Balance.toFixed(2)}`}
          </h1>
        </div>
        <div className="flex justify-between">
          <div
            className="flex items-center gap-2 bg-blue-400 py-2 px-5 rounded w-[42%] text-center text-white justify-center cursor-pointer"
            onClick={() => openModal("send")}
          >
            <FontAwesomeIcon icon={faCircleArrowUp} />
            <p>Send</p>
          </div>
          <div
            className="flex items-center justify-center gap-3 bg-blue-400 py-2 w-[42%] px-5 rounded text-white cursor-pointer"
            onClick={() => openModal("receive")}
          >
            <FontAwesomeIcon icon={faCircleArrowDown} />
            <p>Receive</p>
          </div>
        </div>
      </div>
      <TransactionModal
        isOpen={!!modalType}
        modalType={modalType}
        amount={amount}
        setAmount={setAmount}
        email={email}
        setEmail={setEmail}
        description={description}
        setDescription={setDescription}
        handleConfirm={handleTransaction}
        handleClose={closeModal}
      />
      <TransactonHistory transactions={transactions} />
      <BottomNav handleLogout={handleLogout} openModal={openModal} handleClose={closeModal}/>
    </>
  );
};

export default BalanceCard;
