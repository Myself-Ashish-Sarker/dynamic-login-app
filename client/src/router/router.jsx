import { createBrowserRouter } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>
    },
    {
        path: 'signin',
        element: <SignIn></SignIn>
    },
    {
        path: "signup",
        element: <SignUp></SignUp>
    }
]);

export default router;