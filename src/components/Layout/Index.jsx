import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Cart from '../../pages/Cart'
import LoginModal from '../../pages/LoginModal'

const LayOut = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Cart />
            <Footer />
            <LoginModal />
        </div>
    )
}

export default LayOut