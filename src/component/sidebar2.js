import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SHOW_FORM } from '../redux/actionType';
import Form from './Form';

const Sidebar2 = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    return (
        <div>
            {state.showForm ? <Form /> :
                <div className='w-fit mx-auto mt-96'>
                    <button onClick={() => dispatch({type: SHOW_FORM})} className='h-20 w-72 font-bold text-center text-base text-white rounded-3xl bg-indigo-600 pl-4 px-5 mb-4 '>
                        Download "Campaign structure Guide"
                    </button><br />
                </div>
            }
        </div>
    );
};

export default Sidebar2;