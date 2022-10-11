import React from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import Question from '../Question/Question';
const Quiz = ({ quizes }) => {
    const { question, correctAnswer, options } = quizes;
    // console.log(options);
    const [answer, setAnswer] = useState(correctAnswer)
    const questionAnswer = () => {
        setAnswer(correctAnswer);
        alert(answer);
    }
    return (
        <div className='quiz'>
            <div className='question'>
                <h4>{question}</h4>
                <EyeIcon width="75" height="25" onClick={questionAnswer}></EyeIcon>
            </div>
            <div className='option'>
                {
                    options.map((option, idx) => <Question option={option} key={idx} correctAnswer={correctAnswer}></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;