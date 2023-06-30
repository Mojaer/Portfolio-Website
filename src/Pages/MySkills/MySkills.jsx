import Title from "../../Components/Title/Title";
import './Skills.css'
import html from '../../assets/Logo/icons8-html-144.png'
import css from '../../assets/Logo/icons8-css-400.png'
import bootstrap from '../../assets/Logo/icons8-bootstrap-144.png'
import tailwind from '../../assets/Logo/icons8-tailwind-css-144.png'
import GitHub from '../../assets/Logo/icons8-github-144.png'
import mongoDb from '../../assets/Logo/icons8-mongodb-144.png'
import react from '../../assets/Logo/icons8-react-native-128.png'
import js from '../../assets/Logo/icons8-javascript-144.png'
import vs from '../../assets/Logo/icons8-visual-studio-code-2019-144.png'
import express from '../../assets/Logo/icons8-express-js-160.png'
// import { useState, useEffect } from "react";


const MySkills = () => {
    // const [state, setState] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setState(prevCounter => {
    //             const updatedCounter = prevCounter + 1;
    //             if (updatedCounter === 12) {
    //                 clearInterval(interval);
    //             }
    //             return updatedCounter;
    //         });
    //     }, 100); // Interval of 1000 milliseconds (1 second)

    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    // console.log(state)
    return (
        <section className="skills py-10 text-center md:me-80 lg:me-96 p-6">
            <Title title={'MY SKILLS'}></Title>

            <article className="my-10  flex w-full justify-around">
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={html} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className={` bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-9/12 html_progress`}></div>
                        <p className="text-white text-left  ">Html</p>
                    </div>
                </div>
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={css} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-9/12 css_progress"></div>
                        <p className="text-white text-left  ">CSS</p>
                    </div>
                </div>
            </article>

            <article className="my-10  flex w-full justify-around">
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={bootstrap} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-10/12 bootstrap_progress"></div>
                        <p className="text-white text-left  ">Bootstrap</p>
                    </div>
                </div>
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={tailwind} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-10/12 tailwind_progress"></div>
                        <p className="text-white text-left  ">Tailwind</p>
                    </div>
                </div>
            </article>

            <article className="my-10  flex w-full justify-around">
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={react} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-8/12 react_progress"></div>
                        <p className="text-white text-left  ">React</p>
                    </div>
                </div>
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={mongoDb} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-7/12 mongodb_progress"></div>
                        <p className="text-white text-left  ">MongoDb</p>
                    </div>
                </div>
            </article>
            <article className="my-10  flex w-full justify-around">
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={GitHub} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-9/12 github_progress"></div>
                        <p className="text-white text-left  ">Github</p>
                    </div>
                </div>
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={js} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-7/12 js_progress"></div>
                        <p className="text-white text-left  ">javascript</p>
                    </div>
                </div>
            </article>
            <article className="my-10  flex w-full justify-around">
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={vs} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-9/12 node_progress"></div>
                        <p className="text-white text-left  ">VS code</p>
                    </div>
                </div>
                <div className="flex items-center w-5/12">
                    <div className="w-16"><img className="w-full" src={express} alt="" /></div>
                    <div className="w-5/6 mx-auto bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2.5 rounded-full w-7/12 express_progress"></div>
                        <p className="text-white text-left  ">Expressjs</p>
                    </div>
                </div>
            </article>

            <div>

            </div>
        </section>
    );
};

export default MySkills;