import React from 'react'
import './navbar.css'

class Navbar extends React.Component {
    icon_size = 20;
    nav_iconSize = 35;

    componentDidMount() {

    }

    render() {
        return (
            <>
            <nav>
                <div className='nav__brand'>
                    <h1 className='logo'><span>e</span>Learn</h1>
                </div>
                <div className='nav__menu'>
                    <ul className='nav__lists'>
                        <li className='nav__list'>Home</li>
                        <li className='nav__list'>About</li>
                        <li className='nav__list'>
                            <svg xmlns="http://www.w3.org/2000/svg" width={this.icon_size} height={this.icon_size} fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                            </svg>
                        </li>
                        <li className='nav__list'>
                            <div className='nav__acc-icon'>A</div>
                        </li>
                    </ul>
                </div>
                <div className='nav__theme-icon'>
                    <svg xmlns="http://www.w3.org/2000/svg" width={this.icon_size} height={this.icon_size} fill="currentColor" class="bi bi-moon-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                    </svg>
                </div>
            </nav>
            <div className='nav-mobile'>
                <svg xmlns="http://www.w3.org/2000/svg" width={this.nav_iconSize} height={this.nav_iconSize} fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={this.nav_iconSize} height={this.nav_iconSize} fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width={this.nav_iconSize} height={this.nav_iconSize} fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
            </div>
            </>
        )
    }
}

export default Navbar