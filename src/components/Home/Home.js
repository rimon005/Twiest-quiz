import React from 'react';
import './Home.css'
import logo from '../Photos/Illustration.png'
import { useLoaderData } from 'react-router-dom';
import Language from '../Language/Language';
import About from '../About/About';
const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <div>
            <div className='home'>
                <div className='hero'>
                    <div className='hero-area'>
                        <p className='title'>Are you ready to Learn?</p>
                        <h3 className='main-title'>Learn With fun on <span>any schedule</span></h3>
                        <p className='details'>Following quiz provides Multiple Choice Questions (MCQs) related to C Programming Language. You will have to read all the given answers and click over the correct answer.</p>
                        <button className='get-started-btn'>Get Started</button>
                    </div>
                    <div className='hero-banner'>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className='languages'>
                {
                    data.data.map(language => <Language language={language} key={language.id} ></Language>)
                }
            </div>
            <About></About>
        </div>
    );
};

export default Home;