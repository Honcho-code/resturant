import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import AllTransactionPage from "./Pages/AllTransactionPage";
import TransactionDetails from "./Components/TransactionDetails";
import Notification from "./Pages/Notification";

function App() {
  const [users, setUsers] = useState(()=>{
    try{
      const savedUsers = localStorage.getItem("users")
      return savedUsers ? JSON.parse(savedUsers) : []
    }catch(error){
      console.error("Error parsing users from localstorage", error)
      return []
    }
  });

  const [currentUser, setCurrentUser] = useState(() => {
    try{
      const savedUser = localStorage.getItem("currentUser");
      return savedUser ? JSON.parse(savedUser) : null
    }catch(error){
      console.error("Error parsing currentUser from localstorage", error)
      return null
    }
  });

  // Save users to localStorage whenever the users array changes
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  // Save currentUser to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
  }, [currentUser]);


  const handleSignup = (newUser) => {
    if (users.some((user) => user.email === newUser.email)) {
      alert("User with this email already exists!");
      return false;
    }

    setUsers([...users, newUser]);
    return true;
  };

  // const handleSignup = ({ name, email, password })=>{
  //   const newUser = {name, email, password}

  //   const existiingUsers = JSON.parse(localStorage.getItem("users")) || []
  //   localStorage.setItem("users", JSON.stringify([...existiingUsers, newUser]))

  //   localStorage.setItem("currentUser", JSON.stringify(newUser))

  //   return true
  // }
  const handleLogin = ({email, password}) => {
    const existiingUsers = JSON.parse(localStorage.getItem("users")) || []
    const user = existiingUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      // setCurrentUser(user);
      return true;
    } else {
      // alert("Invalid email or password");
      return false;
    }
  };
  const handleLogout = () => {
    // setCurrentUser(null)
    localStorage.removeItem("currentUser")
    // Navigate("/login")
  };
  return (
    <div className="w-full overflow-hidden">
      <Router>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              currentUser ? (
                <Home user={currentUser} handleLogout={handleLogout} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>} />
          <Route path="/signup" element={<Signup handleSignup={handleSignup}/>} />
          <Route path="/home" element={<Home user={currentUser} handleLogout={handleLogout}/>} />
          <Route path="/transactions" element={<AllTransactionPage/>}/>
          <Route path="/transaction/:id" element={<TransactionDetails/>}/>
          <Route path="/notification" element={<Notification/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
