import React from "react";
import About from "../About/About";
import ShowReel from "../ShowReel/ShowReel";
import Service from "../Service/Service";
import RecentWorks from "../RecentWorks/RecentWorks";
import Production from "../Production/Production";
import Team from "../Team/Team";
import PhotoGalary from "../PhotoGalary/PhotoGalary";
import Timeline from "../Timeline/Timeline";
import Banner from "../Banner/Banner";
const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <ShowReel />
      <Service />
      <RecentWorks />
      <Timeline />
      <Production />
      <PhotoGalary />
      <Team />
    </div>
  );
};

export default Home;
