import React from 'react';
import './Language.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Language = ({ language }) => {
    // console.log(language);
    const { name, logo, id } = language;
    return (
        <div className='language'>
            <img src={logo} alt="" />
            <div className='language-info'>
                <h4>{name}</h4>
                <div className='btn'>
                        <Link to={`/quizes/${id}`} className='quiz-btn'>Quiz</Link>
                        <ArrowLongRightIcon width="75" height="35" />
                </div>

            </div>
        </div>
    );
};

export default Language;