import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../Shared/Loading/Loading";

const Article = () => {
  const articleId = useParams();
  let [loading, setLoading] = useState(true);

  const [aricleData, setAricleData] = useState();
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    fetch(
      `https://filmmonks-server.onrender.com/api/work-timeline/${articleId.id}`
    )
      .then((res) => res.json())
      .then((data) => setAricleData(data));
  }, [articleId.id]);

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <ArticleWrapper setLoading="false">
          <div className="flex  justify-between items-center mb-8">
            <div className="mt-28 text-left xl:mx-24 lg:mx-12 md:mx-12 mx-12">
              <h2 className="article">{aricleData?.headline}</h2>
              <p className="project-description">Project Description</p>
              <p className="border mt-2 border-b-[#F25659] w-14"></p>
              {aricleData?.videoLink && (
                <div>
                  {" "}
                  <iframe
                    className="video"
                    src={aricleData?.videoLink}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              )}
              {aricleData?.director && (
                <p className="project-description">
                  Director : <span> {aricleData?.director}</span>
                </p>
              )}
              {aricleData?.producer && (
                <p className="project-description">
                  Producer: <span>{aricleData?.producer}</span>
                </p>
              )}
              {aricleData?.year && (
                <p className="project-description">
                  Year : <span>{aricleData?.year}</span>
                </p>
              )}
              {aricleData?.type && (
                <p className="project-description">
                  {" "}
                  Project Type: <span>{aricleData?.type}</span>
                </p>
              )}

              {aricleData?.language && (
                <p className="project-description">
                  {" "}
                  Language: <span>{aricleData?.language}Bangla</span>
                </p>
              )}
              {aricleData?.writer && (
                <p className="project-description">
                  {" "}
                  Writer: <span>{aricleData?.writer}Jaynto Kundu</span>
                </p>
              )}
              {aricleData?.content && (
                <div className="text-justify">
                  <p className="project-description lg:w-[500px] md:w-[500px]  ">
                    Logline : <span className="">{aricleData?.content}</span>
                  </p>
                </div>
              )}
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
      )}
    </>
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
