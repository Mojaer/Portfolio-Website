import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Pages/Home/Home";

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
                element: <Home></Home>
            },
            {
                path: '/myProjects',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Home></Home>
            }

        ]
    },
]);

export default router;