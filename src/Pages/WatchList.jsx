import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import ProductCard from '../Components/ProductCard'

const WatchList = () => {
  const {watchList} = useContext(CartContext)
  return (
    <div className='mt-20'>
      <h1 className='p-4 md:p-20 text-center font-bold md:text-start md:text-xl'>Your WatchList</h1>
      <div className='flex flex-wrap gap-0 md:gap-5 justify-between'>
        {watchList.length > 0 ? (
          watchList.map((product)=>(
            <ProductCard key={product.id} product={product}/>)
          )
        ) : (
          <p className="absolute top-[50%] left-[50%] translate-x-[-50%] text-[18px] md:text-xl">Your watchlist is empty</p>
        )}
      </div>
    </div>
  )
}

export default WatchList