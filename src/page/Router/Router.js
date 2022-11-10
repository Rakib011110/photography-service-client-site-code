import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import Review from "../../PhotoGrapyService/Review";
import Service from "../../PhotoGrapyService/Service";
import ServiceDetails from "../../PhotoGrapyService/ServiceDetails";
import Update from "../../PhotoGrapyService/Update";
import Blog from "../Blog";
import Home from "../Home";
import Login from "./Login";
import PrivetRouter from "./PrivetRouter";
import Registration from "./Registration";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/blog",
                element: <Blog></Blog>

            },
            {
                path: "login",
                element: <Login></Login>

            },

            {

                path: "register",
                element: <Registration></Registration>
            },

            {
                path: "/services",
                element: <PrivetRouter> <Service></Service></PrivetRouter>
            },

            {
                path: "/services/:id",
                element: <PrivetRouter><ServiceDetails />  </PrivetRouter>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-mu.vercel.app/services/${params.id}`)
            },
            {
                path: "/review/:id",
                element: <Review></Review>,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-mu.vercel.app/services/${params.id}`)
            },
            {
                path: "/reviwsdata",
                element: <PrivetRouter></PrivetRouter>
            },
            {
                path: "/update/:id",
                element: <Update />,
                loader: ({ params }) => fetch(`https://assignment-11-server-site-mu.vercel.app/reviwsdata/${params.id}`)
            },

            // {
            //     path: '/serviceData',
            //     element: <DetailsReview></DetailsReview>
            // }



        ]
    }


])
export default router;



