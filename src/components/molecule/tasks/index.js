import React from 'react'
import { Gap, TaskItem } from '../../atoms'
import './tasks.css'

const Tasks = () => {
    return (
        <div className='tasks-wrapper'>
            <h2 id='tdy-task'>Today's Tasks</h2>
            <TaskItem/>
            <Gap height={10} />
            <TaskItem/>
            <Gap height={20} />
            <div className='see-more-btn'>
                <h3>See more</h3>
            </div>
        </div>
    )
}

export default Tasks