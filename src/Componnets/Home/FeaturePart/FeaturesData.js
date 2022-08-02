import React from 'react';

export default function FeaturesData({ feature }) {
    const { name, img, feature1, feature2 } = feature;
    return (
        <div class="card max-w-md bg-base-100 shadow-xl image-full">
            <figure><img src={img} alt="car-parts" /></figure>
            <div class="card-body m-8 ">
                <h2 class="card-title  text-center text-white font-bold">{name}</h2>
                <ul className='text-slate-300'>
                    <li> <span className='font-bold '>#</span> {feature1}</li>
                    <li><span className='font-bold '>#</span> {feature2}</li>
                </ul>
            </div>
        </div>
    )
}
