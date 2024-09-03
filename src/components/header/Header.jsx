import React from 'react'
import "./styles.scss"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h1>Logo</h1>
                <span className='tag'>tag</span>
            </div>
            <div className="links">
                <span>Home</span>
                <span>About</span>
                <span>Contact</span>
                <span>Services</span>
                <button className='butt'>Login</button>
            </div>
        </div>
    )
}

export default Header
