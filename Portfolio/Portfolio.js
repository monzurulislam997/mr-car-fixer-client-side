import React from 'react';

const Portfolio = () => {
    return (
        <div className=' lg:w-96  h-80 sm:w-48  lg:flex   mt-20 ml-40'>
            <div class="avatar">
                <div class="w-48 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://i.ibb.co/Npgwwvk/download.jpg" alt='site owner' />
                </div>
                <div className='  ml-10'>
                    <h2 className=' font-bold text-3xl mt-16 text-teal-500 ' >Monzurul Islam</h2>
                    <span>Web Developer</span>

                    <ul className='text-xl text-green-700'>
                        <li >Education :  BSS(honours)</li>
                        <li> email:   monzurulislam997@gmail.com</li>
                        <ul>
                            <li># HTML</li>
                            <li># CSS</li>
                            <li># Bootstrap</li>
                            <li># Tailwind</li>
                            <li># javaScript</li>
                            <li># React</li>
                            <li># MongoDb</li>
                        </ul>
                    </ul>
                </div>
            </div>
            <div className='ml-5 mt-20'>
                <h2 className='text-2xl'>Live Site Link:</h2>
                <ul>
                    <li className='text-blue-500'><a href="https://amazfit-bicycle-yoko.web.app/">Amazfit Yooko</a></li>
                    <li className='text-blue-500'><a href="https://precious-ganache-e8b827.netlify.app/blogs">Bugtti car</a></li>
                    <li className='text-blue-500'><a href="https://gentle-hamster-a2248f.netlify.app/">Mega Discount</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Portfolio;