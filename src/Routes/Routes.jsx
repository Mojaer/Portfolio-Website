import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";
import MySkills from "../Pages/MySkills/MySkills";
import MyProjects from "../Pages/MyProjects/MyProjects";
import Contact from "../Pages/Contact/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/mySkills',
                element: <MySkills></MySkills>
            },
            {
                path: '/myProjects',
                element: <MyProjects></MyProjects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }

        ]
    },
]);

export default router;