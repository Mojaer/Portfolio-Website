import { NavLink } from "react-router-dom";
import './NavBar.css'


const NavBar = () => {
    return (
        <nav className='my-10 ms-4 w-1/2   md:w-full'>
            <ul className='navbar'>
                <li className="my-4 w-2/3 md:w-1/2 p-2 md:p-2 "> <NavLink to='/' className='uppercase text-white text-xs md:text-lg font-bold'>About me</NavLink></li>
                <li className="my-4 w-2/3 md:w-1/2 p-2 md:p-2 "> <NavLink to='/mySkills' className='uppercase text-white text-xs md:text-lg font-bold'>My Skills</NavLink></li>
                <li className="my-4 w-2/3 md:w-1/2 p-2 md:p-2 "> <NavLink to='/myProjects' className='uppercase text-white text-xs md:text-lg font-bold'>My Projects</NavLink></li>
                <li className="my-4 w-2/3 md:w-1/2 p-2 md:p-2 "> <NavLink to='/contact' className='uppercase text-white text-xs md:text-lg font-bold'>Contact</NavLink></li>
            </ul>
        </nav>
    );
};

export default NavBar;