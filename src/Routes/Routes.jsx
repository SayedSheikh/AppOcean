import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";
import AboutUs from "../Pages/AboutUs";
import AppNotFound from "../Components/AppNotFound/AppNotFound";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

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
        hydrateFallbackElement: <p>loading...</p>,
      },
      {
        path: "app/:id",
        loader: () => fetch("/data.json"),
        Component: AppDetails,
      },
      {
        path: "profile",
        element: <p>This is profile</p>,
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
