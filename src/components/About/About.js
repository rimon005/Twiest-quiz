import React from 'react';
import './About.css'
import book from '../ICON/book.png'
import Student from '../ICON/Student.png'
import Students from '../ICON/Students.png'
import Test from '../ICON/Test.png'
import people from '../ICON/people.png'
import calendar from '../ICON/calendar.png'
import Courses1 from '../Photos/Morder psyc.png'
import Courses2 from '../Photos/Morder pychons.png'
import Courses3 from '../Photos/Morder pyschology.png'

const About = () => {
    return (
        <div>
            <div className='about'>
                <div className='book'>
                    <div>
                        <img src={book} alt="" />
                    </div>
                    <h2>1500+ Topic</h2>
                    <p>Learn Anythings Learn Anythings
                    </p>
                </div>
                <div className='Student'>
                    <div>
                        <img src={Student} alt="" />
                    </div>
                    <h2>1800+ Students</h2>
                    <p>Learn Anythings Learn Anythings
                    </p>
                </div>
                <div className='Students'>
                    <div>
                        <img src={Students} alt="" />
                    </div>
                    <h2>9K+ Test Token</h2>
                    <p>Learn Anythings Learn Anythings
                    </p>
                </div>
                <div className='Test'>
                    <div>
                        <img src={Test} alt="" />
                    </div>
                    <h2>2000+ Student</h2>
                    <p>Learn Anythings Learn Anythings
                    </p>
                </div>
            </div>
                {/* Courses section */}
            <div className='courses'>
                <div className='course'>
                    <div className='courses-img'>
                        <img src={Courses1} alt="" />
                    </div>
                    <h4>Designation</h4>
                    <button  className='get-started-btn'>Buy Courses</button>
                    <div className='courses-details'>
                        <div className='courses-time'>
                            <img src={calendar} alt="" />
                            <p>Start 20 April, 2021</p>
                        </div>
                        <div className='people'>
                            <img src={people} alt="" />
                            <p>60 seats </p>
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <div className='courses-img'>
                        <img src={Courses1} alt="" />
                    </div>
                    <h4>Designation</h4>
                    <button  className='get-started-btn'>Buy Courses</button>
                    <div className='courses-details'>
                        <div className='courses-time'>
                            <img src={calendar} alt="" />
                            <p>Start 20 April, 2021</p>
                        </div>
                        <div className='people'>
                            <img src={people} alt="" />
                            <p>60 seats </p>
                        </div>
                    </div>
                </div>
                <div className='course'>
                    <div className='courses-img'>
                        <img src={Courses1} alt="" />
                    </div>
                    <h4>Designation</h4>
                    <button  className='get-started-btn'>Buy Courses</button>
                    <div className='courses-details'>
                        <div className='courses-time'>
                            <img src={calendar} alt="" />
                            <p>Start 20 April, 2021</p>
                        </div>
                        <div className='people'>
                            <img src={people} alt="" />
                            <p>60 seats </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;