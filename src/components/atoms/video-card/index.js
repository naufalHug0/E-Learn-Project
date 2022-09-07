import React from 'react'
import './video-card.css'

class VideoCard extends React.Component {
    render() {
        return (
            <div className="video-card">
                <div className="video-card__bg" style=
                    {{
                        background: `url(${this.props.videoBg})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover'
                    }} alt="" />
                <div className="video-card__desc">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.date}</p>
                    <p>{this.props.subject}</p>
                </div>
            </div>
        )
    }
}

export default VideoCard