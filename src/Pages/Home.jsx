import { useState } from 'react'
import ProductList from '../Components/ProductList'

const Home = () => {
  const [cart, setCart] = useState([])
  const addToCart = (product)=>{
    setCart([...cart, product])
  }
  return (
    <div>
      <ProductList addToCart={addToCart}/>
    </div>
  )
}

export default Home