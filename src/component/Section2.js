import React from 'react';
import Sidebar2 from './sidebar2';
import Video2 from './Video2';

const Section2 = () => {
    return (
        <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
            <Video2 />
            <Sidebar2 />
        </div>
    );
};

export default Section2;