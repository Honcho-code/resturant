import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../animation/success.json.json'

const SuccesCheck = () => {
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    }
  return (
    <div className='flex justify-center items-center'>
        <Lottie options={defaultOption} width={120} height={120}/>
    </div>
  )
}

export default SuccesCheck