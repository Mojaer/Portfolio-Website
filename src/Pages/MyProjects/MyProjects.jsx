import Title from "../../Components/Title/Title";
import './Projects.css'
import imaginary1 from '../../assets/Website/imaginari1.png'
import imaginary2 from '../../assets/Website/imaginary2.png'
import toy from '../../assets/Website/toy.png'
import cuisine from '../../assets/Website/Australian.png'
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import DetailModal from "../../Components/Modal/DetailModal";


const MyProjects = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    return (
        <section className="projects py-10 text-center lg:me-96 p-6 ">
            <Title title={'MY PROJECTS'}></Title>

            <div className="p-6  w-full">
                {/* details about the projects */}
                <DetailModal open={open} handleOpen={handleOpen}></DetailModal>

                <div className="flex lg:h-[35rem] md:h-[25rem] h-[17rem] w-full ">
                    <div className='h-5/6 w-1/2 overflow-auto scroll rounded-lg floating p-1'>
                        <img src={imaginary1} alt="" />
                        <br />
                        <img src={imaginary2} alt="" />
                    </div>
                    <article className="text-white w-1/2 px-4 pt-4 overflow-auto h-5/6 ">
                        <h2 className="text-md md:text-2xl font-semibold">Instrumental Imaginarium</h2>
                        <h3 className="text-sm md:text-xl font-semibold">(Summer Camp Course Website)</h3>
                        <Button onClick={handleOpen} variant="gradient">
                            Open Dialog
                        </Button>
                    </article>
                </div>
                <div className="flex lg:h-[35rem] md:h-[25rem] h-[17rem] w-full">
                    <div className='h-5/6 w-1/2 overflow-auto scroll rounded-lg'>
                        <img src={toy} alt="" />
                    </div>
                    <article className="text-white w-1/2 p-8">

                    </article>
                </div>
                <div className="flex lg:h-[35rem] md:h-[25rem] h-[17rem] w-full">
                    <div className='h-5/6 w-1/2 overflow-auto scroll rounded-lg floating '>
                        <img src={cuisine} alt="" />s
                    </div>
                    <article className="text-white w-1/2 p-8">

                    </article>
                </div>


            </div>


        </section>
    );
};

export default MyProjects;