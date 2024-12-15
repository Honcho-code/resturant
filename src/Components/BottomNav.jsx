import { faExpeditedssl } from '@fortawesome/free-brands-svg-icons'
import { faHome, faCircleArrowDown,
    faCircleArrowUp,
    faDoorOpen, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const BottomNav = ({ handleLogout, openModal, handleClose }) => {
    const [homeIsActive, setHomeIsActive] = useState(true)
    const [sendActive, setSendActive] = useState(false)
    const [receiveActive, setReceiveActive] = useState(false)

    const navigate = useNavigate()
    const homeButton = ()=>{
        navigate("/home")
        setHomeIsActive(true)
        setSendActive(false)
        setReceiveActive(false)
        handleClose()
    }
    const sendButton = ()=>{
        openModal("send")
        setSendActive(!sendActive)
        setHomeIsActive(false)
        setReceiveActive(false)
    }
    const receiveButton = ()=>{
        openModal("receive")
        setReceiveActive(true)
        setSendActive(false)
        setHomeIsActive(false)
    }
  return (
    <div className='bg-white shadow-sm w-full  fixed bottom-0 left-0'>
        <div className='flex justify-around items-center p-4 max-w-md mx-auto'>
            <div className={homeIsActive ? "text-blue-700 flex flex-col items-center gap-2 " : "text-gray-500 flex flex-col items-center gap-2 "} onClick={homeButton}>
                <FontAwesomeIcon icon={faHome}/>
                <p>Home</p>
            </div>
            <div className={sendActive ? "text-blue-700 flex flex-col items-center gap-2 " : "text-gray-500 flex flex-col items-center gap-2 "} onClick={sendButton}>
                <FontAwesomeIcon icon={faCircleArrowUp}/>
                <p>Send</p>
            </div>
            <div className={receiveActive ? "text-blue-700 flex flex-col items-center gap-2 " : "text-gray-500 flex flex-col items-center gap-2 "} onClick={receiveButton}>
                <FontAwesomeIcon icon={faCircleArrowDown}/>
                <p>Receive</p>
            </div>
            <div className='flex flex-col items-center gap-2 text-gray-500' onClick={handleLogout}>
                <FontAwesomeIcon icon={faDoorOpen}/>
                <p>Logout</p>
            </div> 

        </div>
    </div>
  )
}

export default BottomNav