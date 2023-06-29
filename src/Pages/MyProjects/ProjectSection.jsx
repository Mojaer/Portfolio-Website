import { useEffect, useRef, useState } from "react";
import DetailModal from "../../Components/Modal/DetailModal";


const ProjectSection = ({ project }) => {
    const [open, setOpen] = useState(false);
    const divRef = useRef(null);
    const handleOpen = () => setOpen(!open);
    const { title, subtitle, image, image2, shortDescription } = project

    useEffect(() => {
        const autoScroll = setInterval(() => {
            if (divRef.current) {
                divRef.current.scrollTop += 1
            }
            // if (divRef.current.scrollTop === (divRef.current.scrollHeight - divRef.current.offsetHeight)) {
            //     divRef.current.scrollTop = 0;
            // }
        }, 70)
        return () => clearInterval(autoScroll);
    }, []);
    return (
        <div>
            {/* details about the projects */}
            <div className="ms-auto">
                <DetailModal open={open} handleOpen={handleOpen}></DetailModal>
            </div>

            <div className="flex lg:h-[35rem] md:h-[25rem] h-[17rem] w-full ">
                <div ref={divRef} className='h-5/6 w-1/2 overflow-auto scroll rounded-lg  p-1'>
                    <img className="mb-2" src={image} alt="" />
                    <img src={image2} alt="" />
                </div>
                <article className="text-white w-1/2 px-4 pt-4 overflow-auto h-5/6 flex flex-col justify-center items-center ">
                    <h2 className="text-md md:text-3xl font-semibold">{title}</h2>
                    <h3 className="text-sm md:text-2xl font-semibold">{subtitle}</h3>
                    <p className="my-4">{shortDescription}</p>
                    <div className="my-6">
                        <button onClick={handleOpen} className="rounded-xl font-bold btn md:p-3 bg-gradient-to-r from-indigo-700 via-purple-600 to-red-500  shadow drop-shadow-md hover:shadow-lg shadow-white" >
                            Project Details
                        </button>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default ProjectSection;