import React from 'react';
import SideForm from './sideForm';
import Video from './Video';

const Section1 = () => {
    return (
        <div  className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <Video />
            <SideForm/>
        </div>
    );
};

export default Section1;