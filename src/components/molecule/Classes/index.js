import React, { useState } from 'react'
import { useMemo } from 'react'
import { ClassesItem, Join_Class } from '../../atoms'
import './classes.css'

const Classes = () => {
    let arr = [0,0,0]
    const [joinCode, setJoinCode] = useState(false)

    useMemo(() => {},[joinCode])
    return (
        <div className='classes-wrapper'>
        {joinCode&&<Join_Class show={setJoinCode}/>}
        <h2 id='my-class'>My Classes</h2>
        <div className='classes'>
            {arr.slice(0,3).map(() => {
                return (
                    <ClassesItem/>
                )
            }) 
            // <p id="not-joined">You're not joined to any class</p>
            }
            <div className="classes-btn">
                <div onClick={() => setJoinCode(true)} className="join-btn" style={arr.length > 0 ? null:{width: '100%'}}>
                    <h3>+ Join Class</h3>
                </div>
                {arr.length > 0 ?<div className="see-more-btn">
                    <h3>See more</h3>
                </div>:null}
            </div>
        </div>
        </div>
    )
}

export default Classes