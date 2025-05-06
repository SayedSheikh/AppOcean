import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Error/Error";
import Home from "../Pages/Home";
import AppDetails from "../Pages/AppDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: Error,
    children: [
      {
        index: true,
        loader: () => fetch("/data.json"),
        Component: Home,
        hydrateFallbackElement: <p>loading...</p>,
      },

      {
        path: "installedApps",
        loader: () => fetch("/data.json"),
        Component: AppDetails,
      },
      {
        path: "profile",
        element: <p>This is profile</p>,
      },
    ],
  },
]);

export default router;
