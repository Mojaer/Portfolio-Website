import './SideBar.css'
import image from '../../assets/DSC_0592__4_-removebg-preview.png'
import { TypeAnimation } from 'react-type-animation';
import NavBar from './NabBar/NavBar';

const SideBar = () => {
    return (
        <div className='flex md:block sidebar md:w-80 p-4 lg:w-96 w-full md:h-screen fixed top-0 md:right-0 bg-slate-200 mt-0'>
            <div className='mx-4 md:mt-6 mb-6s '>

                <div className='img_container md:w-2/3 w-1/5 bg-slate-400 relative overflow-hidden drop-shadow-2xl ms-3 rounded-full   img-cir-bg'>
                    <img className='' src={image} alt="profile_pic" ></img>
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
        </div>
    );
};

export default SideBar;