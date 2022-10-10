import React from 'react';
import './Home.css'
import logo from '../Photos/Illustration.png'
const Home = () => {
    return (
        <div className='hero'>
            <div className='hero-area'>
                <p className='title'>Are you ready to Learn?</p>
                <h3 className='main-title'>Learn With fun on <span>any schedule</span></h3>
                <p className='details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem reprehenderit deleniti tempora laudantium.</p>
                <button>Get Started</button>
            </div>
            <div className='hero-banner'>
                <img src={logo} alt="" />
            </div>
        </div>
    );
};

export default Home;