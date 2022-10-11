import React from 'react';
import './Quiz.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
const Quiz = ({quizes}) => {
    // console.log(quizes);
    const {question , correctAnswer , options} = quizes;
    console.log(correctAnswer);
    const [answer , setAnswer]= useState(correctAnswer)
    const questionAnswer = () => {
       setAnswer(correctAnswer);
      alert(answer)
      console.log(answer);

    }
    return (
        <div className='questions'>
            <div className='question'>
                <h4>{question}</h4>
                <EyeIcon width="75" height="25" onClick={questionAnswer}></EyeIcon> 
            </div>
        </div>
    );
};

export default Quiz;