import React from "react";
import Banner from "../Banner/Banner";
import About from "../About/About";
import ShowReel from "../ShowReel/ShowReel";
import Service from "../Service/Service";
import RecentWorks from "../RecentWorks/RecentWorks";
import Production from "../Production/Production";
import Team from "../Team/Team";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ShowReel />
      <Service />
      <RecentWorks />
      <Production />
      <PhotoGalary />
      <Team />
    </div>
  );
};

export default Home;
