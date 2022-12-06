import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirMationModal from '../../../Shared/ConfirmationModal/ConfirMationModal';
import Loading from '../../../Shared/Loading/Loading';

const ManageDoctors = () => {
    const [DeletingDoctor, setDeletiongDoctor] = useState(null);
    const closeModal = () => {
        setDeletiongDoctor(null);
    }


    const { data: allDoctors = [], isLoading, refetch } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(' https://doctors-portal-server-navy-seven.vercel.app/doctors', {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`

                    }
                });
                const data = await res.json();
                return data;
            }
            catch (error) {

            }
        }
    });
    const handleDeleteDoctor = doctor => {
        fetch(` https://doctors-portal-server-navy-seven.vercel.app/doctors/${doctor._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then((data => {
                if (data.deleteCount > 0) {
                    refetch();
                    toast.success(`Doctor ${doctor.name} deleted successfully`)
                }

            }))
    }

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>Manage Doctors: {allDoctors?.length}</h3>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allDoctors?.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-xl">
                                        <img src={doctor.image} alt='' />
                                    </div>
                                </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td>
                                    <label onClick={() => setDeletiongDoctor(doctor)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>

                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                DeletingDoctor && <ConfirMationModal
                    title={`Are you sure you want to delete`}
                    message={`if you delete ${DeletingDoctor.name}. It cannot be undone`}
                    closeModal={closeModal}
                    successAction={handleDeleteDoctor}
                    successButtonName='Delete'
                    modalData={DeletingDoctor}

                ></ConfirMationModal>
            }
        </div>
    );
};

export default ManageDoctors;