import React from 'react';
import './Homepage.scss';
import Category from "../../Categories/Categories";

const Homepage = (props) => {
    return (
        <div className='homepage'>
            <Category/>
        </div>
    )
};

export default Homepage;