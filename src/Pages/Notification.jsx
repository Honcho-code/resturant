import { faArrowDown, faArrowLeft, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && Array.isArray(currentUser.notification)) {
      setNotifications(currentUser.notification);
    }
  }, []);

  const clearNotifications = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    currentUser.notification = [];
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    setNotifications([]);
  };
  return (
    <div className="p-4 w-full max-w-md mx-auto">
      <div className="flex mb-4 items-center justify-between fixed gap-5 bg-white">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={() => navigate(-1)}
          className="p-2 bg-gray-300 text-gray-700 cursor-pointer rounded shadow-sm"
        />
        <h1 className="text-lg font-semibold">Notification</h1>
      </div>
      {notifications.length === 0 ? (
        <p className="text-gray-500  mt-14">No Notification yet.</p>
      ) : (
        <ul className="space-y-4 mt-14">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-4 rounded shadow-sm cursor-pointer"
            > 
            <div className="flex items-center gap-3">

              <FontAwesomeIcon
                icon={notification.type === "Sent" ? faArrowUp : faArrowDown}
                className={
                  notification.type === "Sent"
                    ? "bg-red-200 text-red-700 p-2 rounded"
                    : "bg-green-200 text-green-700 p-2 rounded"
                }
              />
              <div>
                <p className="text-lg font-medium">{notification.message}</p>
                <p className="text-gray-400">{notification.date}</p>
              </div>
            </div>
            </li>
          ))}
        </ul>
      )}
      {notifications.length > 0 && (
        <button
          onClick={clearNotifications}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear Notifications
        </button>
      )}
    </div>
  );
};

export default Notification;
