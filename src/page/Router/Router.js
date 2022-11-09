import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layouts/Main";
import AllReviewItems from "../../PhotoGrapyService/AllReviewItems";
import Review from "../../PhotoGrapyService/Review";
import Service from "../../PhotoGrapyService/Service";
import ServiceDetails from "../../PhotoGrapyService/ServiceDetails";
import Update from "../../PhotoGrapyService/Update";
import Blog from "../Blog";
import Home from "../Home";
import Login from "./Login";
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
                element: <Service></Service>
            },

            {
                path: "/services/:id",
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/review/:id",
                element: <Review></Review>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/reviwsdata",
                element: <AllReviewItems />
            },
            {
                path: "/update/:id",
                element: <Update />
            }


        ]
    }


])
export default router;



