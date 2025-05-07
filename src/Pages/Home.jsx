import React, { Suspense, useEffect, useState } from "react";
import Slider from "../Components/Slider/Slider";
import { useLoaderData } from "react-router";
import BestGames from "../Components/BestGames/BestGames";
import TopApps from "../Components/TopApps/TopApps";
import HealthApps from "../Components/HealthApps/HealthApps";
import ProductivityApps from "../Components/ProductivityApps/ProductivityApps";
import EducationApps from "../Components/EducationApps/EducationApps";
import Information from "../Components/Information/Information";
import Loader from "../Components/Loader/Loader";

const trendingPromise = fetch("/trending_data.json").then((res) => res.json());

const Home = () => {
  const data = useLoaderData();
  // console.log(data);
  const [games, setGames] = useState([]);
  const [healthApps, setHealthApps] = useState([]);
  const [productivityApps, setProductivityApps] = useState([]);
  const [educationApps, setEducationApps] = useState([]);

  useEffect(() => {
    const gamesData = data.filter((item) => item.category === "Games");
    setGames(gamesData);
    setHealthApps(data.filter((item) => item.category === "Health"));
    setProductivityApps(
      data.filter((item) => item.category === "Productivity")
    );
    setEducationApps(data.filter((item) => item.category === "Education"));
  }, [data]);
  return (
    <div className="min-h-[calc(100vh-65px)] z-0">
      <title>AppOcean | Home</title>

      <Suspense fallback={<Loader></Loader>}>
        <Slider trendingPromise={trendingPromise}></Slider>
      </Suspense>
      <BestGames games={games}></BestGames>
      <TopApps apps={data}></TopApps>
      <HealthApps apps={healthApps}></HealthApps>
      <ProductivityApps apps={productivityApps}></ProductivityApps>
      <EducationApps apps={educationApps}></EducationApps>
      <Information></Information>
    </div>
  );
};

export default Home;
