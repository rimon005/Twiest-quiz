import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(quizes);
    const {name , id, questions, total} = quizes.data;
    return (
        <div className='quizes'>
            <h2>Quiz of  {name}</h2>
            {
                questions.map(quizes => <Quiz quizes={quizes} key={quizes.id}></Quiz>)
            }
        </div>
    );
};

export default Quizes;