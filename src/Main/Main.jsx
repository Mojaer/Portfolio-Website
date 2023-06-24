import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";
import Footer from "../Shared/Footer/Footer";


const Main = () => {
    return (
        <div>
            <section className="">
                <SideBar></SideBar>
                <Outlet ></Outlet>
            </section>
            <Footer></Footer>

        </div>
    );
};

export default Main;