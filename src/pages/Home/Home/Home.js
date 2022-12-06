import React from 'react';
import Contacts from '../Contacts/Contacts';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Service from '../Services/Service';
import TestimoNial from '../Testimonial/TestimoNial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            {/* <Services></Services> */}
            <Service></Service>
            <MakeAppointment></MakeAppointment>
            <Contacts></Contacts>
            <TestimoNial></TestimoNial>
           
        </div>
    );
};

export default Home;