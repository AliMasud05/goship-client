import { createBrowserRouter, Router } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Services from "../../Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/services',
                element:<Services></Services>
            }
        ]

    }

]);
 export default router;