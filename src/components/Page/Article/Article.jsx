import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// const aricleData = [
//   {
//     _id: "64b2f49a49a1ee17939f3aa8",
//     image: "1689446846969-Rectangle 268.png",
//     headline: "Balancing Acts",
//     content:
//       "A portrayal of how women from different professions and social classes balance their lives between professions and other activities in our society.",
//     type: "Documentary",
//     director: "Jaynto Kundu",
//     year: "2023",
//     producer: "Shithe Debnath",
//     language: "Bangla",
//     writer: "undefined",
//     videoLink: "https://www.youtube.com/embed/hjBNiA3_1t8",
//   },
//   {
//     _id: "64b2f49a49a1ee17939f3aa9",
//     image: "1689446723858-Rectangle 267.png",
//     headline: "Article 25",
//     content:
//       "A small-town struggling woman searches for her missing brother who guided and implemented confidence within herself to be independent. While revolving around her she learns about the complex socio-political instances and the substantial uncertainty in it.",
//     type: "Short Film",
//     director: "Jaynto Kundu",
//     year: "2023",
//     producer: "Shithe Debnath",
//     language: "undefined",
//     writer: "undefined",
//     videoLink: "https://www.youtube.com/embed/hjBNiA3_1t8",
//   },
//   {
//     _id: "64b2f49a49a1ee17939f3aa7",
//     image: "1689446910144-Rectangle 269.png",
//     headline: "Silver Jubilee Events",
//     content:
//       "A compiled project of promotional video, documentary and event documentation video for the Department of Fisheries of Dhaka University on their Silver Jubilee events.",
//     type: "Compiled Project (Promotional video, documentary & event documentation)",
//     director: "Jaynto Kundu",
//     year: "2022",
//     producer: "Shithe Debnath",
//     language: "Bangla",
//     writer: "undefined",
//     videoLink: "https://www.youtube.com/embed/hjBNiA3_1t8",
//   },
//   {
//     _id: "64b6d73f74d3bc2b7edf725c",
//     image: "1689704255805-Rectangle 267.png",
//     headline: "‘Hollow Man’ Clothing Photography",
//     content:
//       'A "Packshot photoshoot" using the hollow man photography technique was done with Greenbomb\'s various cloth types. \r\n',
//     type: "Packshot Photoshoot",
//     director: "undefined",
//     year: "2023",
//     producer: "Shithe Debnath",
//     language: "undefined",
//     writer: "undefined",
//     videoLink: "undefined",
//   },
//   {
//     _id: "64b6d78674d3bc2b7edf725d",
//     image: "1689704326229-Rectangle 267.png",
//     headline: "FBCCI Election Campaign and Promotional Video",
//     content:
//       "A project involving a promotional video and photoshoot session that was carried out within a studio setup under the FBCCI election campaign.\r\n",
//     type: "Studio Photoshoot and Promotional Video",
//     director: "undefined",
//     year: "2023",
//     producer: "Shithe Debnath",
//     language: "undefined",
//     writer: "undefined",
//     videoLink: "undefined",
//   },
//   {
//     _id: "64b6d80074d3bc2b7edf725e",
//     image: "1689704448443-Rectangle 267.png",
//     headline: "IFDC Event Documentation and Broadcasting",
//     content:
//       ": A compiled project of event photography, documentation, and broadcasting of a two-day-long event organised by IFDC",
//     type: "Event Documentation and Broadcasting",
//     director: "undefined",
//     year: "2023",
//     producer: "Shithe Debnath",
//     language: "undefined",
//     writer: "undefined",
//     videoLink: "https://www.youtube.com/watch?v=TTsB2T00gJ4 ",
//   },
// ];

const Article = () => {
  const articleId = useParams();
  const [aricleData, setAricleData] = useState();
  useEffect(() => {
    fetch(
      `https://filmmonks-server.onrender.com/api/work-timeline/${articleId.id}`
    )
      .then((res) => res.json())
      .then((data) => setAricleData(data));
  }, []);


  return (
    <ArticleWrapper>
      <div className="flex  justify-between items-center mb-8">
        <div className="mt-28 text-left xl:mx-24 lg:mx-12 md:mx-12 mx-12">
          <h2 className="article">Article 25</h2>
          <p className="project-description">project description</p>
          <p className="border mt-2 border-b-[#F25659] w-14"></p>
          <div>
            {" "}
            <iframe
              className="video"
              src="https://www.youtube.com/embed/hjBNiA3_1t8"
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
            Project Type: <span>Short Film</span>
          </p>
          <p className="project-description">
            Producer: <span>Shithe Debnath</span>
          </p>
          <p className="project-description">
            {" "}
            Language: <span>Bangla</span>
          </p>
          <p className="project-description">
            {" "}
            Writer: <span>Jaynto Kundu</span>
          </p>
          <div className="text-justify">
            <p className="project-description lg:w-[500px] md:w-[500px]  ">
              Logline :{" "}
              <span className="">
                A small-town struggling woman searches for her missing brother
                who guided and implemented confidence within herself to be
                independent. While revolving around her she learns about the
                complex socio-political instances and the substantial
                uncertainty in it.
              </span>
            </p>
          </div>
        </div>
        <div className="lg:block md:hidden hidden my-auto">
          <img
            className="xl:w-[495.67px] xl:h-[495px] lg:w-[395px] lg:h-[395px] mt-20"
            src="https://i.ibb.co/9qpqzRJ/FILM-MONKS-logo-sign-only-png-1-20-1.png"
            alt=""
          />
        </div>
      </div>
    </ArticleWrapper>
  );
};
export const ArticleWrapper = styled.div`
  background: white;
  .article {
    width: 645px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    margin-bottom: 9px;

    @media screen and (min-width: 1240px) and (max-width: 1440px) {
      width: 545px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1239px) {
      width: 445px;
    }
    @media screen and (max-width: 440px) {
      width: 345px;
      font-size: 16px;

      line-height: 19px;
      margin-bottom: 0px;
    }
  }
  .project-description {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 6px;
    color: #5a5a5a;
    @media screen and (min-width: 441px) and (max-width: 765px) {
      width: 600px;
    }
    @media screen and (max-width: 440px) {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.04em;
      margin-bottom: 0px;
      width: 300px;
    }
  }
  .project-description > span {
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    margin-bottom: 6px;
    color: #5a5a5a;
    @media screen and (max-width: 440px) {
      font-size: 12px;
      line-height: 15px;
      letter-spacing: 0.04em;
      margin-bottom: 0px;
      width: 300px;
    }
  }
  .video {
    width: 581px;
    height: 300px;
    margin-top: 30px;
    margin-bottom: 50px;

    @media screen and (min-width: 1240px) and (max-width: 1440px) {
      width: 500px;
      height: 300px;
    }
    @media screen and (min-width: 1000px) and (max-width: 1239px) {
      width: 400px;
      height: 250px;
    }
    @media screen and (max-width: 440px) {
      width: 290px;
      height: 180px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
`;
export default Article;
