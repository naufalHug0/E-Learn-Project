import React, { useState } from 'react'
import { Button, CommentItem, Gap, TextArea, VideoCard } from '../../components'
import {PREVIEW_VIDEO} from '../../assets'
import './watch.css'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { shuffle } from '../../config'
import axios from 'axios'

const LIKE_BUTTON = ({...rest}) => <svg {...rest} xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16"><path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/></svg>
const LIKED_BUTTON = ({...rest}) => <svg {...rest} xmlns="http://www.w3.org/2000/svg" width="25" height="20" fill="currentColor" class="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16"><path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a9.84 9.84 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733.058.119.103.242.138.363.077.27.113.567.113.856 0 .289-.036.586-.113.856-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.163 3.163 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.82 4.82 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/></svg>

const Watch = () => {
    const [likes, setLikes] = useState(0)
    const [liked, setLiked] = useState(false)
    const [comment_focused, setCommentFocused] = useState(false)
    const [comment, setComment] = useState('')
    const [videos, setVideos] = useState([])
    const [video_data, setVideoData] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [userComments, setUserComments] = useState([])
    const [username, setUsername] = useState('')
    const [row, setRow] = useState(1)
    const params = useParams()

    const handleLikeClick = () => {
        setLikes(likes+(liked?-1:1))
        setLiked(!liked)
    }

    const getDate = (date) => {
        date = date.split('-')
        let month = ''
        switch (date[1]) {
            case '1': month = "Jan";
                break;
            case '2': month = "Feb";
                break;
            case '3': month = "Mar";
                break;
            case '4': month = "Apr";
                break;
            case '5': month = "May";
                break;
            case '6': month = "Jun"; 
                break;
            case '7': month = "Jul";
                break;
            case '8': month = "Aug";
                break;
            case '9': month = "Sept";
                break;
            case '10': month = "Oct";
                break;
            case '11': month = "Nov";
                break;
            default : month = "Dec";
                break;
        }
        return `${date[2]} ${month} ${date[0]}`;
    }

    const onSubmit = () => {
        setUserComments([<CommentItem
            username={username}
            date='0 second ago'
            body={comment.replaceAll('\n','<br/>').split('<br/>').map(str => <p>{str}</p>)}
        />, ...userComments])
        setComment('')
        setRow(1)
        setCommentFocused(false)
    }

    useEffect(() => {
        window.scroll(0, 0);
        setLiked(false);
        Promise.all([
            fetch(`http://localhost:4000/v1/learning/video/${params.id}`).then(res=>res.json()),
            fetch(`http://localhost:4000/v1/learning/videos`).then(res=>res.json())
        ])
        .then(([video, videos]) => {
            setVideoData(video.data);
            setVideos(shuffle(videos.data));
            setLikes(video.data.likes.length)
            setIsLoading(false)
        }).catch(err => console.log(err))
    }, [params.id])

    useEffect(() => {
        axios.get(`http://localhost:4000/v1/auth/user/${sessionStorage.getItem('_id')}`)
        .then(res => {
            setUsername(res.data.data.username)
        }).catch(err => console.log(err))
    },[username, userComments])

    useEffect(() => {
        document.addEventListener('keydown', e => {
            if (e.key === 'Enter' && comment_focused) {
                setRow(row+1)
            }
            if (e.key === 'Backspace' && comment_focused) {
                setRow(comment.split('\n').length)
            }
        })
    }, [comment_focused, comment, row])

    if (isLoading) return <h1>Loading...</h1>

    return (
        <div className='watch-wrapper'>
            <div className="video">
                <video controls  >
                    <source src={PREVIEW_VIDEO}/>
                    This browser does not support video playback
                </video>
                <h1>{video_data.title}</h1>
                <p>{getDate(video_data.createdAt.substring(0,10))}</p>
                <div className="video__likes">
                    {
                        liked ? <LIKED_BUTTON onClick={() => handleLikeClick()}/> : <LIKE_BUTTON onClick={() => handleLikeClick()}/>
                    }
                    <p>{likes}</p>
                </div>
                <div className="video__comments">
                    <h3>{userComments.length} {userComments.length > 1 ? 'Comments':'Comment'}</h3>
                    <TextArea 
                        rows={row} 
                        placeholder='Add a comment...' 
                        onChange={e => setComment(e.target.value)} 
                        onFocus={() => setCommentFocused(true)}
                        value={comment}
                    />
                    {
                        comment_focused ? 
                        <div className='comment-btn'>
                        <Button 
                            title={'Cancel'} 
                            onClick={() => {
                                setCommentFocused(false)
                                setComment('')
                            }}
                        />
                        <Button 
                            title={'Submit'} 
                            onClick={() => onSubmit()}
                        />
                        </div>:null
                    }
                    <Gap height={15}/>
                    <div className="comments">
                        {userComments}
                    </div>
                </div>
            </div>
            <div className="video-lists">
                {
                    videos.slice(0,5).map(video => {
                        return <VideoCard 
                        id={video._id}
                        title={video.title}
                        date={video.createdAt.substring(0,10)}
                        subject={video.subject.name}
                        videoBg={`http://localhost:4000/${video.thumbnail}`}
                        />
                    })
                }
            </div>
        </div>
    )
}

// class Watch extends React.Component {
//     state = {
//         likes: 0,
//         liked: false,
//         comment_focused: false,
//         comment: '',
//         videos: [],
//         video_data: {},
//         isLoading: true,
//         video_id: window.location.href.split('/')
//     }

//     componentDidUpdate() {
//         console.log(this.state);
//     }

//     componentDidMount() {
//         window.scrollTo(0,0)
//         Promise.all([
//             fetch(`http://localhost:4000/v1/learning/video/${this.state.video_id[this.state.video_id.length-1]}`).then(res=>res.json()),
//             fetch(`http://localhost:4000/v1/learning/videos`).then(res=>res.json())
//         ])
//         .then(([video, videos]) => {
//             this.setState({
//                 video_data: video.data, 
//                 videos: videos.data,
//                 isLoading: false,
//                 likes: video.data.likes.length
//             })
//         }).catch(err => console.log(err))
//     }

//     handleLikeClick = () => {
//         this.setState({likes: this.state.likes+(this.state.liked?-1:1), liked: !this.state.liked})
//     }

//     getDate = (date) => {
//         date = date.split('-')
//         let month = ''
//         switch (date[1]) {
//             case '1': month = "Jan";
//                 break;
//             case '2': month = "Feb";
//                 break;
//             case '3': month = "Mar";
//                 break;
//             case '4': month = "Apr";
//                 break;
//             case '5': month = "May";
//                 break;
//             case '6': month = "Jun"; 
//                 break;
//             case '7': month = "Jul";
//                 break;
//             case '8': month = "Aug";
//                 break;
//             case '9': month = "Sept";
//                 break;
//             case '10': month = "Oct";
//                 break;
//             case '11': month = "Nov";
//                 break;
//             default : month = "Dec";
//                 break;
//         }
//         return `${date[2]} ${month} ${date[0]}`;
//     }

//     render() {
//         if (this.state.isLoading) return <h1>Loading...</h1>
//         return (
//             <div className='watch-wrapper'>
//                 <div className="video">
//                     <video controls  >
//                         <source src={PREVIEW_VIDEO}/>
//                         This browser does not support video playback
//                     </video>
//                     <h1>{this.state.video_data.title}</h1>
//                     <p>{this.getDate(this.state.video_data.createdAt.substring(0,10))}</p>
//                     <div className="video__likes">
//                         {
//                             this.state.liked ? <LIKED_BUTTON onClick={() => this.handleLikeClick()}/> : <LIKE_BUTTON onClick={() => this.handleLikeClick()}/>
//                         }
//                         <p>{this.state.likes}</p>
//                     </div>
//                     <div className="video__comments">
//                         <h3>{this.state.video_data.comments.length} {this.state.video_data.length > 1 ? 'Comments':'Comment'}</h3>
//                         <TextArea 
//                             rows={1} 
//                             placeholder='Add a comment...' 
//                             onChange={e => this.setState({comment: e.target.value})} 
//                             onFocus={() => this.setState({comment_focused: true})}
//                             value={this.state.comment}
//                         />
//                         {
//                             this.state.comment_focused ? 
//                             <div className='comment-btn'>
//                             <Button 
//                                 title={'Cancel'} 
//                                 onClick={() => this.setState({comment_focused: false, comment: ''})}
//                             />
//                             <Button 
//                                 title={'Submit'} 
//                             />
//                             </div>:null
//                         }
//                         <Gap height={15}/>
//                         <div className="comments">
//                             <CommentItem/>
//                             <CommentItem/>
//                             <CommentItem/>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="video-lists">
//                     {
//                         shuffle(this.state.videos).slice(0,5).map(video => {
//                             return <VideoCard 
//                             id={video._id}
//                             title={video.title}
//                             date={video.createdAt.substring(0,10)}
//                             subject={video.subject.name}
//                             videoBg={`http://localhost:4000/${video.thumbnail}`}
//                             />
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

export default Watch