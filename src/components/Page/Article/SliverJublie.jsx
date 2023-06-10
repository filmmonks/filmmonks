import React from "react";
import { ArticleWrapper } from "./Article";

const SliverJublie = () => {
  return (
    <ArticleWrapper>
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="mt-28 text-left lg:mx-24 md:mx-16 mx-12">
          <h2 className="article">
            Silver Jubilee Events of the Department of Fisheries of Dhaka
            University
          </h2>
          <p className="project-description">project description</p>
          <p className="border mt-2 border-b-[#F25659] w-14"></p>
          <div>
            {" "}
            <iframe
              className="video"
              src="https://www.youtube.com/embed/uqep8ajOiMU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className="project-description">Director : Jaynto Kundu</p>
          <p className="project-description">year : 2022</p>
          <p className="project-description">
            {" "}
            Project Type: Compiled Project (Promotional video, documentary &
            event documentation)
          </p>
          <p className="project-description">Producers: Shithe Debnath</p>
          <p className="project-description"> Language: Bangla</p>
         
          <p className="project-description lg:w-[500px]  w-[300px]">
            A compiled project of promotional video, documentary and event
            documentation video for the Department of Fisheries of Dhaka
            University on their Silver Jubilee events.
          </p>
        </div>
        <div className="lg:block md:hidden hidden my-auto">
          <img
            className="w-[595.67px] h-[595px] mt-20"
            src="https://i.ibb.co/9qpqzRJ/FILM-MONKS-logo-sign-only-png-1-20-1.png"
            alt=""
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default SliverJublie;
