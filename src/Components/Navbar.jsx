import { useEffect, useState } from "react";
import ProfileImage from "../Images/member-2.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ handleLogout }) => {
  const [notificationCount, setNotificationCount] = useState(0);
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && Array.isArray(currentUser.notifications)) {
      setNotificationCount(currentUser.notifications.length);
    }
  }, []);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      setUserName(currentUser.name);
    }
  }, []);
  const handleLogoutClick = () => {
    handleLogout();
    navigate("/login");
  };
  return (
    <div className="mb-7">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center cursor-pointer">
          <img src={ProfileImage} className="rounded-full w-10 h-10" />
          <p className="text-[14px] font-medium">
            Hi, {userName.toLocaleUpperCase()}
          </p>
        </div>
        
        
        <Link to={"/notification"} className="relative">
          <FontAwesomeIcon icon={faBell} className="text-2xl cursor-pointer" />
          {notificationCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {notificationCount}
            </span>
          )}
        </Link>
      </div>
      {/* <button className='px-3 py-1 border-blue-600 border-2 rounded text-blue-600 font-medium' onClick={handleLogoutClick}>Logout</button> */}
    </div>
  );
};

export default Navbar;
