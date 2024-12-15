import Navbar from '../Components/Navbar'
import BalanceCard from '../Components/BalanceCard'

const Home = ({handleLogout}) => {
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