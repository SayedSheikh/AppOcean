import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import AboutUs from "../Pages/AboutUs";
import AppNotFound from "../Components/AppNotFound/AppNotFound";
import Login from "../Components/Login/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import PrivateRoute from "../Pages/PrivateRoute";
import Loader from "../Components/Loader/Loader";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
        hydrateFallbackElement: <Loader></Loader>,
      },
      {
        path: "app/:id",
        loader: () => fetch("/data.json"),
        hydrateFallbackElement: <Loader></Loader>,
        element: (
          <PrivateRoute>
            <AppDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "aboutUs",
        Component: AboutUs,
      },
      {
        path: "appNotFound",
        Component: AppNotFound,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "signup",
        Component: Registration,
      },
    ],
  },
]);

export default router;
