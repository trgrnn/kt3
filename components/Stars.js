import React from 'react';
import '../App.css';


const Stars = ({ rating }) => {
    const totalStars = 5;
    const activeStars = Math.round(rating);

    return (
        <div>
            {[...Array(totalStars)].map((_, index) => (
                <span
                    key={index}
                    className={`fa fa-star ${index < activeStars ? 'active' : ''}`}
                ></span>
            ))}
        </div>
    );
};

export default Stars;
