import React from 'react';
import chair from '../../../../assets/images/chair.png';
import bg from '../../../../assets/images/bg.png';
import PrimayButton from '../../../../PrimaryButton/PrimayButton';

const Banner = () => {
    return (
        <div className="hero bg-base-200 " style={{
            background: `url(${bg})`,
            backgroundSize: 'cover'
        }}>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt='' className="rounded-lg lg:w-1/5 shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Box Office News!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <PrimayButton>Get Started</PrimayButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;