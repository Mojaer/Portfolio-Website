import { Outlet } from "react-router-dom";
import SideBar from "../Shared/SideBar/SideBar";


const Main = () => {
    return (
        <div>
            <section className="">
                <SideBar></SideBar>
                <Outlet ></Outlet>


            </section>

        </div>
    );
};

export default Main;