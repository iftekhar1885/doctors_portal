import React, {  useState } from 'react';

import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import AvailableOptions from './AvailableOptions';
import BookingModal from '../BookingModal/BookingModal';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../../../Shared/Loading/Loading';
const AvailableAppointments = ({ selectedDate }) => {
    console.log(selectedDate);

    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({

        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-navy-seven.vercel.app/v2/appointmentOptions?date=${date}`);
            const data = await res.json();
            return data;
        }

    })

    // useEffect( () =>{
    //     fetch(`https://doctors-portal-server-navy-seven.vercel.app/appointmentOptions`)
    //     .then(res =>res.json())
    //     .then(data => setAppointmentOptions(data))
    // }, [])

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='my-16'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP0')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AvailableOptions
                        key={option._id}
                        appointmentOption={option}
                        setTreatment={setTreatment}


                    ></AvailableOptions>)
                }
            </div>
            {
                treatment &&
                <BookingModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                >
                </BookingModal>}
        </section>
    );
};

export default AvailableAppointments;