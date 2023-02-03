import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux';
import { PLAY_AND_PAUSE } from '../redux/actionType';
import { video1 } from './allVideoes';


const Video = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state)
    
    return (
        <div>
            {
                state.playPause === false ? "" :
                    <p onClick={() => dispatch({type: PLAY_AND_PAUSE})} className={`absolute bg-white h-14 w-14 rounded-full top-96 left-72 `}><FaPlay className='mx-auto mt-5' /></p>
            }
            <video onClick={() => dispatch({type: PLAY_AND_PAUSE})} className={`h-screen w-full object-cover static cursor-pointer `} src={video1} controls typeof='video/mp4'></video>
        </div>
    );
};

export default Video;