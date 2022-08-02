import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Myprofile = () => {
    const [user] = useAuthState(auth);
    return (
        <div class="flex flex-col h-screen justify-center items-center px-4 lg:px-12">
            <h2 className='text-teal-700 text-3xl text-center font-bold'>My Profile</h2>

            <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://placeimg.com/192/192/people" />
                </div>

            </div>
            <div className='mt-1'>
                <h1 className='text-teal-800'>Name: {user?.displayName}</h1>
                <h1>Email:{user?.email}</h1>

                <div class="form-control w-full mt-5 max-w-xs">
                    <label class="label">
                        <span class="label-text">Add Education</span>
                    </label>
                    <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />

                    <label class="label">
                        <span class="label-text">Location</span>
                    </label>
                    <input type="text" placeholder="city" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        <span class="label-text">Add Phone</span>
                    </label>
                    <input type="text" placeholder="Number" class="input input-bordered w-full max-w-xs" />
                    <button className='text-white bg-teal-700 mt-3'>Update</button>

                </div>

            </div>
        </div>
    );
};

export default Myprofile;

