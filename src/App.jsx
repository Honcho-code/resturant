import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'
import WatchList from './Pages/WatchList'
import ProductDetails from './Pages/ProductDetails'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Search from './Components/Search'

function App() {
  return (
    <div className='w-full overflow-hidden'>
      <Router>
        <Navbar/>
        <ToastContainer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/watchlist' element={<WatchList/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
