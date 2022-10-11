import React from 'react';
import './Blog.css'
const Contact = () => {
    return (
        <div className='blog'>
            <div className='blog-question'>
                <h3><span>Q:</span>What is purpose react router??</h3>
                <p><span>Answer:</span> React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
            </div>
            <div className='blog-question'>
                <h3><span>Q:</span>How does context api work??</h3>
                <p><span>Answer:</span>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>
            <div className='blog-question'>
                <h3><span>Q:</span>What is useRef hook in react??</h3>
                <p><span>Answer:</span>useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.</p>
            </div>
        </div>
    );
};

export default Contact;