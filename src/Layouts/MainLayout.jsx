import React from "react";
import { Outlet, useNavigation } from "react-router";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Loader from "../Components/Loader/Loader";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  const navigation = useNavigation();

  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-115px)]">
        {navigation.state === "loading" ? <Loader></Loader> : <Outlet></Outlet>}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
