import React from "react";
import { ArticleWrapper } from "./Article";

const BalanceArt = () => {
  return (
    <ArticleWrapper>
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="mt-28 text-left xl:mx-24 lg:mx-12 md:mx-12  mx-12">
          <h2 className="article">Balancing Acts</h2>
          <p className="project-description">project description</p>
          <p className="border mt-2 border-b-[#F25659] w-14"></p>
          <div>
            {" "}
            <iframe
              className="video"
              src="https://www.youtube.com/embed/uN1C1d8AlyQ"
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
            Year : <span>2023</span>
          </p>
          <p className="project-description">
            {" "}
            Project Type: <span>Documentary</span>
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
                A portrayal of how women from different professions and social
                classes balance their lives between professions and other
                activities in our society.
              </span>
            </p>
          </div>
        </div>
        <div className="lg:block md:hidden hidden my-auto">
          <img
            className="xl:w-[595.67px] xl:h-[595px] lg:w-[395px] lg:h-[395px] mt-20"
            src="https://i.ibb.co/9qpqzRJ/FILM-MONKS-logo-sign-only-png-1-20-1.png"
            alt=""
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};

export default BalanceArt;
