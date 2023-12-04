import React from 'react'
import { BLANK_PP } from '../../../assets'
import './profile.css'

const CHAT_ICON = () => <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" class="bi bi-chat-fill" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/></svg>
const CAMERA_ICON = () => <svg xmlns="http://www.w3.org/2000/svg" width="35" fill="currentColor" class="bi bi-camera-video-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/></svg>

const Profile = ({user}) => {
    return (
        <div className='profile'>
            <div className="profile__picture" style={{backgroundImage:`url(${user.profile_picture||BLANK_PP})`}}></div>
            <div className="profile__name">
            <h2>{user.name}</h2>
            <p>Student</p>
            </div>
            <div className="profile__option">
                <CHAT_ICON/>
                <CAMERA_ICON/>
            </div>
        </div>
    )
}

export default Profile