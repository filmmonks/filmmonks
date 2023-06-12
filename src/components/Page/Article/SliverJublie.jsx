import React from "react";
import { ArticleWrapper } from "./Article";

const SliverJublie = () => {
  return (
    <ArticleWrapper>
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="mt-28 text-left xl:mx-24 lg:mx-12 md:mx-12 mx-12">
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
          <p className="project-description">
            Director : <span> Jaynto Kundu</span>
          </p>
          <p className="project-description">
            Year : <span>2022</span>
          </p>

          <p className="project-description md:w-[400px]">
            {" "}
            Project Type:{" "}
            <span>
              {" "}
              Compiled Project (Promotional video, documentary & event
              documentation)
            </span>
          </p>

          <p className="project-description">
            Producer: <span>Shithe Debnath</span>
          </p>
          <p className="project-description">
            {" "}
            Language: <span>Bangla</span>
          </p>
          <div className="text-justify">
            <p className="project-description lg:w-[500px] md:w-[500px]  ">
              Logline :{" "}
              <span className="">
                A compiled project of promotional video, documentary and event
                documentation video for the Department of Fisheries of Dhaka
                University on their Silver Jubilee events.
              </span>
            </p>
          </div>
        </div>
        <div className="lg:block md:hidden hidden my-auto">
          <img
            className="xl:w-[595.67px] xl:h-[595px] lg:w-[495px] lg:h-[495px] mt-20"
            src="https://i.ibb.co/9qpqzRJ/FILM-MONKS-logo-sign-only-png-1-20-1.png"
            alt=""
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default SliverJublie;
