import React from 'react'
import Navbar from '../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import BalanceCard from '../Components/BalanceCard'
import BottomNav from '../Components/BottomNav'

const Home = ({handleLogout}) => {
  const navigate = useNavigate()
  return (
    <div className='p-4 w-full max-w-md mx-auto'>
      <div>
        <Navbar />
        <BalanceCard handleLogout={handleLogout}/>
        {/* <BottomNav handleLogout={handleLogout}/> */}
      </div>
    
    </div>
  )
}

export default Home