import React from 'react'
import { TASK_ICON } from '../../../assets'
import './task-item.css'

const TaskItem = () => {
    return (
        <div className='task-item'>
            <TASK_ICON/>
            <div className="task-item-desc">
                <h3>Soal Latihan Trigonometri</h3>
                <p>Matematika • 02 Aug 2022</p>
            </div>
        </div>
    )
}

export default TaskItem