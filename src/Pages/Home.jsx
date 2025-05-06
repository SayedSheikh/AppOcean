import React, { useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import { useLoaderData } from "react-router";
import BestGames from "../Components/BestGames/BestGames";
import TopApps from "../Components/TopApps/TopApps";
import HealthApps from "../Components/HealthApps/HealthApps";
import ProductivityApps from "../Components/ProductivityApps/ProductivityApps";
import EducationApps from "../Components/EducationApps/EducationApps";
import Information from "../Components/Information/Information";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const gamesData = data.filter((item) => item.category === "Games");
    setGames(gamesData);
  }, [data]);
  return (
    <div className="min-h-[calc(100vh-65px)] z-0">
      <Slider></Slider>
      <BestGames games={games}></BestGames>
      <TopApps apps={data}></TopApps>
      <HealthApps></HealthApps>
      <ProductivityApps></ProductivityApps>
      <EducationApps></EducationApps>
      <Information></Information>
    </div>
  );
};

export default Home;
