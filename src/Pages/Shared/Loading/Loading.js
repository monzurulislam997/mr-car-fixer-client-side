import React from 'react';
import { HashLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='flex items-center justify-center mt-32'>
            <HashLoader color="#19e8e1" size={60} />
        </div>
    );
};

export default Loading;