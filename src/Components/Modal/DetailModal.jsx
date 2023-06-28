import { Fragment } from "react";
import { Dialog } from "@material-tailwind/react";
import { FaCcStripe, FaReact } from "react-icons/fa";
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import { DiNodejs } from "react-icons/di";

const DetailModal = ({ open, handleOpen }) => {

    return (
        <Fragment>
            <Dialog open={open} className="bg-none" handler={handleOpen}>
                <div className=" h-[40rem] bg-transparent mt-10">
                    <div className="bg-white w-11/12 mx-auto p-10 rounded-xl">
                        <h1 className="my-2">Its a simple dialog.</h1>
                        <hr />
                        <div className="my-2" >
                            <h3 className="">
                                The key to more success is to have a lot of pillows. Put it this way, it took me
                                twenty five years to get these plants, twenty five years of blood sweat and tears, and
                                I&apos;m never giving up, I&apos;m just getting started. I&apos;m up to something. Fan
                                luv.
                            </h3>
                            <hr />
                            <div className="my-8">
                                <h4 className="text-lg font-semibold underline">
                                    Technology Behind the project
                                </h4>
                                <div className="mt-6 px-6 box-content md:flex grid grid-cols-4 gap-y-20">
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-300"><FaReact></FaReact><strong className="text-sm group-hover:text-transparent uppercase">react</strong> </span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-yellow-500"><SiFirebase></SiFirebase> <strong className="text-sm group-hover:text-transparent uppercase">Firebase</strong> </span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-500"><SiTailwindcss></SiTailwindcss><strong className="text-sm group-hover:text-transparent uppercase">Tailwind</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-blue-500"><SiDaisyui></SiDaisyui><strong className="text-sm group-hover:text-transparent uppercase">daisyUI</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-black"><FaCcStripe></FaCcStripe><strong className="text-sm group-hover:text-transparent uppercase">Stripejs</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-black"><SiExpress></SiExpress><strong className="text-sm group-hover:text-transparent uppercase">Express</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-green-700"><DiNodejs></DiNodejs><strong className="text-sm group-hover:text-transparent uppercase">Nodejs</strong></span>
                                    <span className="font-bolder mx-auto text-3xl h-10 hover:text-6xl duration-500 group text-green-700"><SiMongodb></SiMongodb><strong className="text-sm group-hover:text-transparent uppercase">Mongodb</strong></span>

                                </div>
                            </div>
                            <hr />
                            <div>
                                <button
                                    onClick={handleOpen}
                                    className="mr-1 btn btn-primary"
                                >
                                    Back
                                </button>
                            </div>

                        </div>

                    </div>

                </div>
            </Dialog>
        </Fragment>
    );
}
export default DetailModal