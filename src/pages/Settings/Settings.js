import React from 'react'
import { useState } from 'react'
import {Gap, Input, ProfilePicture} from '../../components'
import './settings.css'

const Settings = () => {
    const [name, setName] = useState('Admin')
    const [username, setUsername] = useState('admin')

    return (
        <div className='settings-page'>
            <div className="settings-wrapper edit-profile">
                <h2>Edit Profile</h2>
                <ProfilePicture/>
                <Gap height={10}/>
                <Input label="Name" type="text" value={name} onChange={e => setName(e.target.value)}/>
                <Gap height={10}/>
                <Input label="Username" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            </div>
            <div className="settings-wrapper pass-profile">
                <h2>Change Password</h2>
                <Input placeholder="Old Password" type="password"/>
                <Input placeholder="New Password" type="password"/>
                <Input placeholder="Confirm New Password" type="password"/>
            </div>
        </div>
    )
}

export default Settings