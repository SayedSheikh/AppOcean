import React from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Loader from "../Components/Loader/Loader";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Navbar></Navbar>
      {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
