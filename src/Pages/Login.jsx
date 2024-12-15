import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    const success = handleLogin({email, password})
    if(success){
      console.log("Entered password:", password);
      console.log("Entered email:", email);
      setError("")
      alert("Login successfull")
      navigate("/home")
    }else{
      setError("Invalid email or password. Please try again.")
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-blue-500">
      <div className="bg-white rounded shadow-md p-5 w-full max-w-md mx-4">
        <h1 className="text-black text-2xl md:text-4xl font-medium mb-2  text-center">
          Welcome back
        </h1>
        <p className="text-center w-3/4 m-auto text-[16px] mb-4 text-gray-600">
          Login to manage your account and track your finances
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
          />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="show"
              id="show"
              checked={showPassword}
              onChange={(e) => setShowPassword(e.target.checked)}
            />
            <label htmlFor="show">{showPassword ? "Hide password" : "Show password"}</label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-blue-700 rounded text-white text-xl"
          >
            Login
          </button>
          <p className="text-center">
            Don't have an account?{" "}
            <Link to={"/signup"} className="text-blue-700 font-medium">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
