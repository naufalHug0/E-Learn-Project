import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { HAM_ICON } from '../../assets'
import { Gap, SideBar } from '../../components'
import ClassesPage from '../Classes-Page'
import NotFound from '../Not Found'
import Settings from '../Settings/Settings'
import axios from 'axios'
import './account.css'
// account/classes/:id, /settings/:id

const Account = () => {
  const [showSidebar, setShowSidebar] = useState(false)
  const theme = sessionStorage.getItem('theme')
  const navigate= useNavigate()
  const handleSideBar = (bool) => {
    setShowSidebar(bool)
  }
  useEffect(() => {
    axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .catch(() => navigate('/start'))
    if (theme === 'light') document.body.setAttribute('id','') 
  }, [showSidebar,theme])
  return (
    <div id={theme === 'dark'?theme:''}>
    <header className='acc-header'>
      <HAM_ICON width={25} height={18} onClick={() => setShowSidebar(!showSidebar)}/> <Gap width={20}/><h1><span>Acc</span>ount</h1>
    </header>
    <SideBar active={showSidebar?'active':null} handleSideBar={handleSideBar}/>
    <Gap height={100}/>
    <div className="account-page">
      <Routes>
        <Route path='/classes' element={<ClassesPage/>}/>
        <Route path='/settings' element={<Settings/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Account