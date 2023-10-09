import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Upcoming from "../pages/Upcoming/Upcoming";
import Blogs from "../pages/Blogs/Blogs";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/services.json"),
      },
      {
        path: "/upcoming",
        element: (
          <PrivateRoutes>
            <Upcoming></Upcoming>
          </PrivateRoutes>
        ),
        loader: () => fetch("/upcoming.json"),
      },
      {
        path: "/blogs",
        element: (
          <PrivateRoutes>
            <Blogs></Blogs>
          </PrivateRoutes>
        ),
        loader: () => fetch("/blogs.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoutes>
            <ServiceDetails></ServiceDetails>
          </PrivateRoutes>
        ),
        loader: () => fetch("/services.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);



export default router;