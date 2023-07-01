import { useEffect, useRef, useState } from "react";
import DetailModal from "../../Components/Modal/DetailModal";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..



const ProjectSection = ({ project }) => {
    AOS.init();
    const [open, setOpen] = useState(false);
    const divRef = useRef(null);
    const handleOpen = () => setOpen(!open);
    const { title, subtitle, image, image2, shortDescription } = project

    useEffect(() => {

        const containerElement = divRef.current;
        let scrollTimeout;

        const handleHover = () => {
            // Set a new scroll timeout with the desired delay
            scrollTimeout = setInterval(() => {
                if (containerElement) {
                    containerElement.scrollTop += 1;
                }
            }, 15);
        };

        const removeHover = () => {
            clearInterval(scrollTimeout);
            // scrollTimeout = setInterval(() => {
            //     if (containerElement.scrollHeight > 0) {
            //         containerElement.scrollHeight -= 1
            //         containerElement.scrollTop = containerElement.scrollHeight
            //     }
            // }, 15);
        }

        containerElement.addEventListener('mouseenter', handleHover);
        containerElement.addEventListener('mouseleave', removeHover);

        // Clean up the event listener when the component unmounts
        return () => {
            containerElement.removeEventListener('mouseenter', handleHover);
            containerElement.removeEventListener('mouseleave', removeHover);
            clearTimeout(scrollTimeout);
        };

    }, []);
    return (
        <div>
            {/* details about the projects */}
            <div className="ms-auto">
                <DetailModal open={open} handleOpen={handleOpen} project={project}></DetailModal>
            </div>

            <div className="flex lg:h-[35rem] md:h-[25rem] h-[17rem] w-full ">
                <div data-aos="zoom-in-right" data-aos-duration="1000" ref={divRef} className='h-5/6 w-1/2 overflow-auto scroll rounded-lg  p-1'>
                    <img className="mb-2" src={image} alt="" />
                    <img src={image2} alt="" />
                </div>
                <article data-aos="zoom-out" data-aos-duration="500" className="text-white w-1/2 px-4 pt-4 overflow-auto h-5/6 flex flex-col justify-center items-center ">
                    <h2 className="text-md md:text-3xl font-semibold">{title}</h2>
                    <h3 className="text-sm md:text-2xl font-semibold">{subtitle}</h3>
                    <p className="my-4">{shortDescription}</p>
                    <div className="my-6">
                        <button onClick={handleOpen} className="rounded-xl font-bold btn p-2 text-sm md:text-base md:p-3 bg-gradient-to-r from-indigo-700 via-purple-600 to-red-500  shadow drop-shadow-md hover:shadow-lg shadow-white" >
                            Project Details
                        </button>
                    </div>
                </article>
            </div>

        </div>
    );
};

export default ProjectSection;