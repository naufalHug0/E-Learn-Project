import React, { useEffect, useState } from 'react'
import { Footer, Gap, Navbar } from '../../components'
import {Routes, Route} from 'react-router-dom'
import Home from '../Home'

const MainApp = () => {
    const [screen, setScreen] = useState(window.screen.width);
    useEffect(() => {
        setScreen(window.screen.width)
    }, [screen])

    return (
        <>
        <Navbar/>
        <Gap height={180}/>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
        {
            screen > 400 ? <Gap height={50} /> : null
        }
        <Footer/>
        </>
    )
}

export default MainApp