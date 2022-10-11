import React from 'react';
import './Language.css'
import { ArrowLongRightIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import Services from '../Services/Services';
export const dataContext = createContext()
const Language = ({ language }) => {
    console.log(language);
    const [data, setData] = useState(language)
    const { name, logo, id } = language;
    return (
        <dataContext.Provider value={data}>
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
        </dataContext.Provider>
    );
};

export default Language;