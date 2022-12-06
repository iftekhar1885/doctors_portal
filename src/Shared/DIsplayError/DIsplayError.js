import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DIsplayError = () => {
    const {logOut} = useContext(AuthContext);
    const error = useRouteError();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOut()
          .then(() => {
            navigate('/login');
           })
          .catch(err => console.log(err));
      }
    return (
        <div>
            <p className='text-red-500'>Something went wrong!!!</p>
            <p className='text-red-4000'>{error.statusText}</p>
            <h4 className='text-3xl'>Please<button onClick={handleLogOut}>Sign Out</button>And Log Back In</h4>
        </div>
    );
};

export default DIsplayError;