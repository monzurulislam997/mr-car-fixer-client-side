import React from 'react';
import { Link } from 'react-router-dom';
export default function HomeShopData({ service }) {
    const { productName, image, _id, price, availableQty, productDescription } = service;
    // console.log(service);
    return (
        <div class="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img src={image} class="h-52" alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">
                    {productName}
                    <div class="badge bg-black text-white badge-neural">NEW</div>
                </h2>
                <p className='text-slate-500'>{productDescription.slice(0, 70)}</p>
                <div class="card-actions justify-end">
                    <div class="badge  badge-outline text-white bg-green-700">{availableQty} left</div>
                    <div class="badge">{price}$ only</div>
                </div>
                <div class="card-actions justify-end">
                    <Link to={`/services/${_id}`} class="btn bg-teal-800">Order Now</Link>
                </div>
            </div>
        </div>
    )
}
