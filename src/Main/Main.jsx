import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <section className="">
                <SideBar></SideBar>
                <div className=' md:w-auto w-full  '>
                    <Outlet ></Outlet>
                </div>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Main;