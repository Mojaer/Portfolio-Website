import './SideBar.css'
import image from '../../assets/DSC_0592__4_-removebg-preview.png'
import { TypeAnimation } from 'react-type-animation';
import NavBar from './NabBar/NavBar';
import { LiaGreaterThanSolid, LiaLessThanSolid } from 'react-icons/lia';
import { useState } from 'react';


const SideBar = () => {
    const [hide, setHide] = useState(true);
    return (
        <section className={` sidebar ${hide ? 'w-2' : 'w-3/4 md:w-96'} duration-500 lg:w-96 z-30  p-4 h-screen fixed top-0 right-0 bg-slate-200 mt-0`}>
            <div className='mx-4 md:mt-6 mb-6s '>

                <div className='img_container w-32 lg:w-2/3  bg-slate-200 relative overflow-hidden drop-shadow-2xl ms-3 rounded-full img-cir-bg floating'>
                    <img className='w-full' src={image} alt="profile_pic" ></img>
                </div>
                <h1 className='uppercase lg:text-4xl md:text-2xl font-bold text-stone-300 mt-7 mb-3'>MoJaEr AHMED</h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'MERN Stack Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        // Same substring at the start will only be typed out once, initially
                        'Front-end Developer',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"

                    ]}
                    wrapper="span"
                    speed={60}
                    // style={{ fontSize: '1.7rem', display: 'inline-block', marginLeft: 'auto', color: 'white', fontWeight: 'bold' }}
                    className='font-bold text-white md:text-xl lg:text-2xl'
                    repeat={Infinity}
                />
            </div>
            <NavBar></NavBar>
            {hide ? <button onClick={() => setHide(false)} className='bg-gradient-to-r from-black via-black to-red-500 text-white absolute lg:hidden -left-5 p-1 top-1/2 text-4xl rounded-full'><LiaLessThanSolid></LiaLessThanSolid></button> :
                <button onClick={() => setHide(true)} className='bg-gradient-to-r from-black via-black to-red-500 text-white  absolute lg:hidden -left-5 p-1 top-1/2 text-4xl rounded-full'><LiaGreaterThanSolid></LiaGreaterThanSolid></button>
            }
        </section>
    );
};

export default SideBar;