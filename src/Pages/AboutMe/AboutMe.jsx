import { Link } from "react-router-dom";
import Title from "../../Components/Title/Title";
import { ImAttachment, } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';



const AboutMe = () => {
    return (
        <section className=" h-screen text-center">
            <Title title={'ABOUT ME'}></Title>
            <article className="flex justify-center items-start w-11/12 my-10">
                <hr className="border-2 border-white w-full my-24 transform rotate-90" />
                <div>
                    <div className="text-lg md:text-2xl text-left font-bold text-slate-100 ">
                        Hi! I am Mojaer Ahmed <br />
                        Full Stack Developer and proficient with MERN stack, Solid understanding of Frontend development in React.JS.
                        I am committed to Continuous learning and stay updated with the Trending Technology and Skilled in creating responsive user interfaces and building RESTful APIs.
                    </div>
                    <div className="text-left my-10 text-red-100 font-extrabold">
                        <a href='https://drive.google.com/file/d/1oXg_r78x_galcprnZ7toIDfbICVgt7Ps/view?usp=sharing' target="_blank" className="bg-transparent hover:bg-black  py-2 px-4 border border-gray-600 rounded-lg shadow-md hover:shadow-sm shadow-green-300" rel="noreferrer"><ImAttachment className="inline "> </ImAttachment> My Resume</a>
                        <Link className="bg-transparent hover:bg-black ms-3 py-2 px-4 border border-gray-600 rounded-lg shadow-md hover:shadow-sm shadow-green-300">Hire Me</Link>
                        <a href="https://github.com/Mojaer?tab=repositories" target="_blank" className="bg-transparent hover:bg-black ms-3 py-2 px-4 border border-gray-600 rounded-lg shadow-md hover:shadow-sm shadow-green-300" rel="noreferrer flex"><FaGithub className="inline "></FaGithub> GitHub</a>

                    </div>
                </div>
            </article>
        </section>
    );
};

export default AboutMe;