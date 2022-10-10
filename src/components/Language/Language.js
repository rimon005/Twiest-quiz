import React from 'react';
import './Language.css'
const Language = ({ language }) => {
    console.log(language);
    const { name, logo } = language;
    return (
        <div className='language'>
            <img src={logo} alt="" />
            <div className='language-info'>
                <h4>{name}</h4>
                <button className='quiz-btn'>Quiz</button>
            </div>
        </div>
    );
};

export default Language;