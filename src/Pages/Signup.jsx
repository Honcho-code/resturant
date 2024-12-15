import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = ({handleSignup}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate();
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(password !== confirmPassword){
      setError("Password do not match!")
      return;
    }
    setError("")
    if(handleSignup({name, email, password})){
      alert("Signup successfull")
      navigate("/login")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-purple-500 to-blue-500">
    <div className="bg-white rounded shadow-md p-5 w-full max-w-md mx-4">
      <h1 className="text-black text-2xl md:text-4xl font-medium mb-2  text-center">Create Your account</h1>
      <p className="text-center w-3/4 m-auto text-[16px] mb-4 text-gray-600">Signup today to keep track of all your finance.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
        />
        <input
          type={showPassword ? "type" : "password"}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
        />
      <input
          type={showPassword ? "type" : "password"}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
          className="w--full py-4 px-3 bg-gray-300 text-[16px] focus:outline-blue-700"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <div className='flex items-center gap-2 cursor-pointer'>
          <input type="checkbox" name='show' id='show' checked={showPassword} onChange={(e)=>setShowPassword(e.target.checked)}/>
          <label htmlFor="show">{showPassword ? "Hide password" : "Show password"}</label>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-700 rounded text-white text-xl">Create Account</button>
        <p className="text-center">Already have an account? <Link to={'/login'} className="text-blue-700 font-medium">Login</Link></p>
      </form>
    </div>
  </div>

  )
}

export default Signup