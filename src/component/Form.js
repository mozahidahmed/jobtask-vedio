import React from 'react';

const Form = () => {
    return (
        <div className='mt-20'>
            <h3 className='text-xl font-semibold w-[500px] mx-auto'>Before you go, please leave your contact details so we can get back to you...</h3>

            <form className='w-[500px] mx-auto mt-6' action="">
                <input className='border-b-2 w-[500px] text-xl mb-10' type="text" name="name" id="name" placeholder='*Your Name' required /><br />
                <input className='border-b-2 w-[500px] text-xl mb-10' type="email" name="email" id="email" placeholder='*Your Email' required /><br />

                <input type="checkbox" name="check" id="check" required />
                <label htmlFor="check"><span className='text-gray-400 justify-between w-10 pl-4 '>* [Sample legal text] The personal data you have provided will be processed by XXXXX for purposes of providing you the service. The legal basis of the processing is XXXXX. Your data will not be transferred nor assigned to third parties. You can exercise your right to access, rectify and delete your data, as well as the other rights granted by law by sending an email to XXXXX. For further information, please check our privacy policy XXXXX.</span></label><br />

                <input className='mt-40 h-20 w-[500px] font-bold text-center text-base text-white rounded-3xl bg-indigo-600 pl-4 px-5 mb-4 ' type="submit" value="Send Your answer" />
            </form>
        </div>
    );
};

export default Form;