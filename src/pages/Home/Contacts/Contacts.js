import React from 'react';
import appointment from '../../../assets/images/appointment.png';
import PrimayButton from '../../../PrimaryButton/PrimayButton';

const Contacts = () => {
    return (
        <div  style={{
            background: `url(${appointment})`,
            backgroundSize: 'cover'
        }}
        >
            <div className='text-center mt-10'>
                <h4 className='text-bold text-2xl text-primary mt-5'>Contact Us</h4>
                <h2 className='text-bold text-5xl text-white'>Stay Connected Us</h2>
            </div>
            <div className='grid place-content-center mt-5 p-5'>
            <input type="text" placeholder="email" className="input input-bordered mt-5 p-5" />
            <input type="text" placeholder="subject" className="input input-bordered mt-5 p-5" />
            <input type="text" placeholder="Your Message" className="input input-bordered mt-5 mb-5 p-5"/>

            <PrimayButton className='text-center'>Submit</PrimayButton>
            </div>
        </div>
    );
};

export default Contacts;