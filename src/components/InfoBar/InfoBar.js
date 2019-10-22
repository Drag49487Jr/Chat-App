import React from 'react';

const InfoBar = ({room}) => (
    <div className='infoBar'> 
        <div className='leftInnerContainer'>
            <h3>{room}</h3>
        </div>
        <div className='rightInnerContainer'>
            <a href='/'>Exit</a>
        </div>
    </div>
)

export default InfoBar;