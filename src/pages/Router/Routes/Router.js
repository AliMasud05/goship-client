import { createBrowserRouter, Router } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
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
            },
            {
                path:'/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            }
        ]

    }

]);
 export default router;