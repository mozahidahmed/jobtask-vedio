import React from 'react';
import { video2 } from './allVideoes';


const Video2 = () => {

    return (
        <div>
            <video className={`h-screen w-full object-cover static cursor-pointer `} src={video2} autoPlay controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video2;