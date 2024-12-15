import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toPng } from 'html-to-image';
import html2canvas from "html2canvas"

const TransactionDetails = () => {
  const { id } = useParams();
  const [transaction, setTransaction] = useState(null);
  const navigate = useNavigate();
  const detailRef = useRef(null)

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && Array.isArray(currentUser.transaction)) {
      const selectedTransaction = currentUser.transaction[parseInt(id, 10)];
      setTransaction(selectedTransaction);
    }
  }, [id]);
  const handleScreenshot = ()=>{
    if(detailRef.current){
      html2canvas(detailRef.current)
      .then((canvas)=>{
        const dataUrl = canvas.toDataURL("image/png")
        const link = document.createElement('a');
        link.download = `transaction.png`;
        link.href = dataUrl;
        link.click()
      })
      .catch((error)=>{
        console.error("Failed to capture screenshot", error)
      })
    }
  }

  const takeScreenshot = ()=>{
    html2canvas(document.body).then((canvas)=>{
        const imgData = canvas.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = imgData;
        link.download = 'screenshot.png'

        link.click()
    })
}

  const handleShare = ()=>{
    if(navigator.share){
      navigator
        .share({
          title: "Transaction Details",
          text: `Transaction of ${transaction.amount} (${transaction.type})`
        })
        .then(()=>console.log("Shared successfully!"))
        .catch((error)=>console.error("Error Sharing", error))
    }else{
      alert("Sharing is not supported in this browser.")
    }
  }

  if (!transaction) {
    return (
      <div className="p-4 bg-gray-100 min-h-screen">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate("/transactions")}
          className="p-2 bg-gray-300 text-gray-700 cursor-pointer rounded shadow-sm"
        />

        <p className="text-gray-500 text-sm">Transaction not found.</p>
      </div>
    );
  }
  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-300 text-gray-700 cursor-pointer rounded shadow-sm"
        />
        <p className="text-lg font-semibold">Transaction Details</p>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <p
            className={
              transaction.type === "sent"
                ? "text-3xl font-semibold text-red-700 mb-2"
                : "text-3xl font-semibold text-green-700 mb-2"
            }
          >
            {transaction.type}
          </p>
          <h1 className="text-xl font-medium mb-2">
            ${transaction.amount.toFixed(2)}
          </h1>
          <p>{transaction.date}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm font-thin">Status:</p>
            <p className="text-gray-700">Successful</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm font-thin">{transaction.type === "sent" ? "Receiver email:" : "Sender email:"}</p>
            <p className="text-gray-700">{transaction.email}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm font-thin">Transaction Type:</p>
            <p className="text-gray-700">{transaction.type}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm font-thin">Description:</p>
            <p className="text-gray-700">{transaction.description}</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-gray-500 text-sm font-thin">Date:</p>
            <p className="text-gray-700">{transaction.date}</p>
        </div>
      </div>
      <div className="flex justify-center mt-20 gap-20">
        <button className="bg-blue-700 text-white px-4 py-2 rounded" onClick={takeScreenshot}>Screenshot</button>
        <button className="bg-green-700 text-white px-4 py-2 rounded" onClick={handleShare}>Share</button>
      </div>
    </div>
  );
};

export default TransactionDetails;
