import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound, MainApp, StartMenu, Auth, Account } from '../../pages'

const ROUTER_NAVIGATION = () => {
    return (
        <Routes>
            <Route path='/*' element={<MainApp/>}></Route>
            <Route path='/start' element={<StartMenu/>}></Route>
            <Route path='/auth/*' element={<Auth/>}></Route>
            <Route path='/account/*' element={<Account/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
        </Routes>
    )
}

export default ROUTER_NAVIGATION