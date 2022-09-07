import React from 'react'
import {VideoCard} from '../../atoms'
import Subjects from '../SubjectContainer'
import './video-container.css'

class Videos extends React.Component {
    url = 'https://i.ytimg.com/vi/EGl7KxVOyNs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBIBNnjzd80cEMOdEXem98OLaeBVg'
    render() {
        return (
            <div className="video-section">
            <Subjects/>
            <div className="video-container">
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
                <VideoCard 
                title='test'
                date='2020-01-01'
                subject='test'
                videoBg={this.url}
                />
            </div>
            </div>
        )
    }
}

export default Videos