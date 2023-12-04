import React from 'react'
import { useState } from 'react'
import Button from '../button'
import Input from '../input'
import './join-class.css'

const Join_Class = ({show}) => {
    const [errMsg, setErrMsg] = useState('')
    return (
        <div className='join-class prompt'>
            <Input label='Class code' maxLength="5"/>
            <p id='err'>{errMsg}</p>
            <div className="join-class-btns">
                <Button title="Join" onClick={() => setErrMsg('Not Found')}/>
                <Button title="Cancel" onClick={() => show(false)}/>
            </div>
        </div>
    )
}

export default Join_Class