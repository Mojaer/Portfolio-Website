import AboutMe from "../AboutMe/AboutMe";
import './Home.css'


const Home = () => {
    return (
        <div className='Home md:w-auto w-full md:me-80 lg:me-96 mt-28 p-6 md:mt-auto '>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;