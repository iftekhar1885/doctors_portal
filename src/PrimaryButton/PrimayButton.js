import React from 'react';

const PrimayButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-primary to-secondary text-white">{children}</button>
        </div>
    );
};

export default PrimayButton;