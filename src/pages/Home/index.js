import React from 'react'
import {Gap, SearchBar, Videos} from '../../components'
import './home.css'

class Home extends React.Component {
    componentDidMount() {
        document.title = 'eLearn'
    }
    render() {
        return (
            <div className="home-page">
                <>
                    <SearchBar placeholder="Mau Belajar Apa Hari ini..."/>
                    <Gap height={50}/>
                    <Videos />
                </>
            </div>
        )
    }
}

export default Home