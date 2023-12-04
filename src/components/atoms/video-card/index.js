import React from 'react'
import { useNavigate } from 'react-router-dom'
import './video-card.css'

const VideoCard = ({title, date, videoBg, subject, id, loading}) => {
    const navigate = useNavigate();
    return loading ? <div className="video-card skeleton"></div> : (
        <div className="video-card video-card-loaded" onClick={() => navigate(`/watch/${id}`)}>
            <div className="video-card__bg" style=
                {{
                    backgroundImage: `url(${videoBg})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover'
                }} alt="" />
            <div className="video-card__desc">
                <h1>{title}</h1>
                <p>{date}</p>
                <p>{subject}</p>
            </div>
        </div>
    )
}



export default VideoCard