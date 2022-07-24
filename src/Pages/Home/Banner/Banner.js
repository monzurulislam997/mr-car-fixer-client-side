import React from 'react';
import img1 from '../../../assets/images/hundreds-of-unique-designs.jpg'
import img2 from '../../../assets/images/cable-capabilities-and-services.png'
import img3 from '../../../assets/images/custom-wire-rope-assemblies-n-1-comp.jpg'
import img4 from '../../../assets/images/motion-control-solutions.jpg'
const Banner = () => {
    return (
        <div className='w-full px-12'>

            <div class="carousel  ">
                <div id="item1" class="carousel-item w-full">

                    {/* style={{
                    backgroundImage: `url(${img1})`

                }} */}
                    {/* <button className=' text-red-500 bg-yellow-400 display-inline ml-11 block  mt-20 mb-96'>Hi i am mon</button>
                    <button className='bg-yellow-400' >HIfjodjfodjofa</button>
                    <button className=' text-red-500 bg-yellow-400 display-inline ml-11 block  mt-96 mb-20'>Hi i am mon</button> */}
                    <img src={img1} class="w-full" alt='' />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={img2} class="w-full" alt='' />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={img3} class="w-full" alt='' />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={img4} class="w-full" alt='' />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn rounded-full text-red-600 bg-white  btn-xs">1 </a>
                <a href="#item2" class="btn rounded-full text-red-600 bg-white btn-xs">2</a>
                <a href="#item3" class="btn rounded-full text-red-600 bg-white btn-xs">3</a>
                <a href="#item4" class="btn rounded-full text-red-600 bg-white btn-xs">4</a>
            </div>



        </div>
    );
};

export default Banner;