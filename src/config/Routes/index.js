import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound, MainApp } from '../../pages'

const ROUTER_NAVIGATION = () => {
    return (
        <Routes>
            <Route path='/*' element={<MainApp/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    )
}

export default ROUTER_NAVIGATION