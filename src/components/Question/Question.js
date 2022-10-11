import React from 'react';
import './Question.css'
import Swal from 'sweetalert2'
const Question = ({ option, correctAnswer }) => {
    const answer = () => {
        const questionAns = correctAnswer;
        if (questionAns === option) {
            Swal.fire(
            'Good job!',
            'Your answer is right!',
            'success'
          )
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Your answer is wrong!',
              })
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