import React from 'react'
import './comment.item.css'

const CommentItem = ({username, body, date}) => {
    return (
        <div className='comment-item'>
            <div className="comment-user-bg"></div>
            <div className="comment">
                <p id='comment-username'>{username} &nbsp;&nbsp;<span>{date}</span></p>
                <div id='comment-body'>{body}</div>
            </div>
        </div>
    )
}

export default CommentItem