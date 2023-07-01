import { Fragment } from "react";
import { Dialog } from "@material-tailwind/react";
import { FaCcStripe, FaReact } from "react-icons/fa";
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiReactrouter, SiTailwindcss, SiVercel } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const DetailModal = ({ open, handleOpen, project }) => {

    // console.log(project)

    return (
        <Fragment>
            <Dialog open={open} className="bg-none overflow-scroll" handler={handleOpen}>
                <div className=" h-[40rem] w-full bg-transparent">
                    <div className="bg-white w-11/12 mx-auto p-10 rounded-xl">
                        <h1 className="my-2 text-center font-semibold text-2xl"> {project.title}</h1>
                        <h1 className="my-2 text-center font-semibold text-xl"> {project.subtitle}</h1>
                        <hr className="my-4" />
                        <div className="my-2" >
                            <h3 className="my-4  text-lg">
                                {project.longDescription}
                            </h3>
                            <hr className="my-4 " />

                            <div className="flex justify-center my-5">
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    className=" btn rounded py-2 px-6 font-bold text-lg bg-blue-300 shadow drop-shadow-lg my-3" rel="noreferrer">
                                    Live Link
                                </a>
                                <a
                                    href={project.clientCodeLink}
                                    target="_blank"
                                    className="ms-2 btn rounded py-2 px-6 font-bold text-lg bg-green-300 shadow drop-shadow-lg my-3" rel="noreferrer">
                                    Client Side Code
                                </a>
                                <a
                                    href={project.serverCodeLink}
                                    target="_blank"
                                    className="ms-2 btn rounded py-2 px-6 font-bold text-lg bg-violet-400 shadow drop-shadow-lg my-3" rel="noreferrer">
                                    Server Side Code
                                </a>

                            </div>
                            <div className="my-8">
                                <h4 className=" text-center font-semibold text-2xl my-4">
                                    Technology Behind the project
                                </h4>
                                <div className="my-10 px-6 box-content md:flex grid grid-cols-2 md:grid-cols-4 gap-y-10 ">
                                    {project.technologyUsed.includes('React.js') && <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-300"><FaReact className="mx-auto"></FaReact><strong className="text-sm group-hover:text-transparent uppercase">react</strong> </span>}
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-yellow-500"><SiFirebase className="mx-auto"></SiFirebase> <strong className="text-sm group-hover:text-transparent uppercase">Firebase</strong> </span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-500"><SiTailwindcss className="mx-auto"></SiTailwindcss><strong className="text-sm group-hover:text-transparent uppercase">Tailwind</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-500"><SiDaisyui className="mx-auto"></SiDaisyui><strong className="text-sm group-hover:text-transparent uppercase">daisyUI</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-black"><FaCcStripe className="mx-auto"></FaCcStripe><strong className="text-sm group-hover:text-transparent uppercase">Stripejs</strong></span>
                                </div>
                                <hr className="mt-10" />
                                <div className="my-10 px-6 box-content md:flex grid grid-cols-3 md:grid-cols-4 gap-y-10">
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-black"><SiExpress className="mx-auto"></SiExpress><strong className="text-sm group-hover:text-transparent uppercase">Express</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-green-700"><DiNodejs className="mx-auto"></DiNodejs><strong className="text-sm group-hover:text-transparent uppercase">Nodejs</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-green-700"><SiMongodb className="mx-auto"></SiMongodb><strong className="text-sm group-hover:text-transparent uppercase">Mongodb</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-black"><SiVercel className="mx-auto"></SiVercel><strong className="text-sm group-hover:text-transparent uppercase">Vercel</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10  hover:text-6xl duration-500 group  text-black"><SiReactrouter className="mx-auto" /><strong className="hidden md:text-sm group-hover:text-transparent uppercase">React-Router</strong></span>
                                </div>
                                <hr className="mt-10" />

                                <div className="flex justify-center">
                                    <button
                                        onClick={handleOpen}
                                        className="mr-1 btn rounded py-2 px-6 font-bold text-lg text-white bg-red-600 shadow drop-shadow-lg my-3">
                                        Back To Projects
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Fragment>
    );
}
export default DetailModal