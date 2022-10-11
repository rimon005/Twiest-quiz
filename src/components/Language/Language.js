import React from 'react';
import './Language.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
const Language = ({ language }) => {
    console.log(language);
    const { name, logo } = language;
    return (
        <div className='language'>
            <img src={logo} alt="" />
            <div className='language-info'>
                <h4>{name}</h4>
                <div className='btn'>
                    <button className='quiz-btn'>Quiz</button>
                    <ArrowLongRightIcon  width="75" height="35" />
                </div>

            </div>
        </div>
    );
};

export default Language;