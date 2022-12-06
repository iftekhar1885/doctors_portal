import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Services from './Services';

const Service = () => {

    const servicesData = [
        {
            id: 1,
            name: 'Fluride Treatment',
            description: 'lorem ipsum is simply dummy printing and typesetting',
            img: fluoride
        },
        {
            id: 2,
            name: 'cavity Filling',
            description: 'lorem ipsum is simply dummy printing and typesetting',
            img: cavity
        },
        {
            id: 3,
            name: 'Teeth Whitening',
            description: 'lorem ipsum is simply dummy printing and typesetting',
            img: whitening
        },
    ]
    return (
        <div className='mt-16'>
         <div className='text-center'>
            <h3 className='text-primary uppercase text-xl'>Our Services</h3>
            <h2 className='text-3xl'>Services We Provide</h2>
        </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
             {
                servicesData.map(service => <Services
                key={service.id}
                service={service}
                ></Services>)
             }
          </div>
        </div>
        
    );
};

export default Service;