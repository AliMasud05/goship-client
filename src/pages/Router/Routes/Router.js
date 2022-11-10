import { createBrowserRouter, Router } from "react-router-dom";
import Blog from "../../../Blog/Blog";
import Main from "../../../Layout/Main";
import MyReviewDetails from "../../../MyReviewDetails/MyReviewDetails";
import PrivateRoute from "../../../PrivateRoute/PrivateRoute";
import AddService from "../../AddService/AddService";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import MyReview from "../../MyReview/MyReview";
import ServiceDetails from "../../ServiceDetails/ServiceDetails";
import Services from "../../Services/Services";
import SignUp from "../../SignUp/SignUp";

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
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
             path:'/my_reviews',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

            },
            {
                path:'/add_service',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/details',
                element:<MyReviewDetails></MyReviewDetails>
            }
        ]

    }

]);
 export default router;