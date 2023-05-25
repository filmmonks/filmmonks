import React from "react";
import styled from "styled-components";

const aricleData = [
  {
    id: 1,
    title: "Article 25",
    director: "Jaynto Kumar Kundu",
    year: 2023,
    producers: ["Shithe Debnath", "Jannatul Yasmin  Songita"],

    language: "Bangla",

    writer: "Jaynto Kumar Kundu",

    type: "Short Film",
    videoLink: "",
  },
];
const Article = () => {
  return (
    <ArticleWrapper>
      <div className="flex flex-wrap justify-between items-center mb-8">
        <div className="mt-28 text-left lg:mx-24 md:mx-16 mx-12">
          <h2 className="article">Artcle</h2>
          <p className="project-description">project description</p>
          <p className="border mt-2 border-b-[#F25659] w-14"></p>
          <div>
            {" "}
            <iframe
              className="video"
              src="https://www.youtube.com/embed/AazzbXZuu3g"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className="project-description">Director : Jaynto Kumar Kundu</p>
          <p className="project-description">year : 2023</p>
          <p className="project-description"> Project Type: Short Film</p>
          <p className="project-description">
            Producers: Shithe Debnath, Jannatul Yasmin Songita
          </p>
          <p className="project-description"> Language: Bangla</p>
          <p className="project-description"> Writer: Jaynto Kumar Kundu</p>
        </div>
        <div className="lg:block md:hidden hidden my-auto">
          <img
            className="w-[595.67px] h-[595px] "
            src="https://i.ibb.co/9qpqzRJ/FILM-MONKS-logo-sign-only-png-1-20-1.png"
            alt=""
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};
const ArticleWrapper = styled.div`
  background: white;
  .article {
    width: 145px;
    height: 36px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 9px;
    @media screen and (max-width: 440px) {
      font-size: 16px;
      height: 26px;
      line-height: 19px;
      margin-bottom: 0px;
    }
  }
  .project-description {
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 6px;
    color: #5a5a5a;
    @media screen and (max-width: 440px) {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.04em;
      margin-bottom: 0px;
    }
  }
  .video {
    width: 581px;
    height: 300px;
    margin-top: 30px;
    margin-bottom: 50px;
    @media screen and (max-width: 440px) {
      width: 290px;
      height: 180px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
export default Article;
