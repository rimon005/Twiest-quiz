import React from 'react';
import './Question.css'
const Question = ({ option, correctAnswer }) => {
    const answer = () => {
        const questionAns = correctAnswer;
        // console.log(questionAns);
        if (questionAns === option) {
            alert('Your and is true')
            // alert(questionAns)
        }
        else {
            alert('answer is wrong')
        }
    }
    // console.log(option);
    return (
        <div className='questions'>
                <input type="radio" name="drone" value="huey" onClick={answer} />
                <label htmlFor=''>{option}</label>
        </div>
    );
};

export default Question;