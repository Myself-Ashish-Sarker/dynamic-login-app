import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";

const router = createBrowserRouter([

    {
        path: '/signin',
        element: <SignIn></SignIn>
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>
    }
]);

export default router;