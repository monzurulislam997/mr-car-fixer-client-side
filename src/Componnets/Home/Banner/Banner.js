import React from 'react'
import { Link } from 'react-router-dom'
import wave from './wave.svg'
export default function Banner() {
    return (
        <div className="rounded-lg"
            style={{
                backgroundImage: `url(${wave})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://i.ibb.co/dmgyzDK/banner-img.png" class="object-fill h-80 lg:w-8/12     rounded-lg shadow-2xl" alt="/" />
                    <div>
                        <h1 class="text-5xl text-teal-700 font-bold py-2 ml-1">Find The Right Parts Faster</h1>
                        <p class="py-2 m-2 text-xl font-bold">Bonnet/hood. Bonnet/hood. Car cover. Support stick. Hinges and springs.</p>
                        <Link to="/shop" class="btn bg-teal-600 text-white">Explore!!!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
