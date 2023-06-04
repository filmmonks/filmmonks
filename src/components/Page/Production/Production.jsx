import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
import styled from "styled-components";
import "./Production.css";

const productionData = [
  {
    id: 1,
    title: "Research",
    img: "https://i.ibb.co/bH5fPb0/research.png",
    list: [
      {
        id: 1,
        description: "Script Analysis",
      },
      {
        id: 2,
        description: "Reference Findings",
      },
      {
        id: 3,
        description: "Research File",
      },
    ],
    showImage: true,
  },
  {
    id: 2,
    title: "Project Development",
    img: "https://i.ibb.co/gZNXjdx/projectdevelopment.png",
    list: [
      {
        id: 1,
        description: "Budget",
      },
      {
        id: 2,
        description: "Public Relation (PR) Design",
      },
    ],
    showImage: false,
  },
  {
    id: 3,
    title: "Pre Production",
    img: "https://i.ibb.co/9ZMkhmv/preproduction.png",

    list: [
      {
        id: 1,
        description: "Selection of Casts and Crews",
      },
      {
        id: 2,
        description: "Crew Orientation and Briefing",
      },
      {
        id: 3,
        description: "Script Breakdown",
      },
      {
        id: 4,
        description: "1st Pre Production Meeting(PPM)",
      },
      {
        id: 5,
        description: "Location Recce",
      },
      {
        id: 6,
        description: "Finalizing Costumes",
      },
      {
        id: 7,
        description: "Finalizing Props & Set Design",
      },

      {
        id: 8,
        description: "Finalizing Equipment",
      },
      {
        id: 9,
        description: "Finalizing Locations",
      },
      {
        id: 10,
        description: "Permission and Insurance",
      },
      {
        id: 11,
        description: "2nd PPM",
      },
      {
        id: 12,
        description: "Shot Division",
      },
      {
        id: 13,
        description: "Storyboard",
      },
      {
        id: 14,
        description: "Rehearsal",
      },
      {
        id: 15,
        description: "3rd PPM",
      },
    ],
    showImage: true,
  },
  {
    id: 4,
    title: "Shooting/Production",
    img: "https://i.ibb.co/z2VWVrj/shooting.png",
    showImage: false,
  },
  {
    id: 5,
    title: "Post Production",
    img: "https://i.ibb.co/jgQ5m12/Post-Production.png",
    list: [
      {
        id: 1,
        description: "First Cut",
      },
      {
        id: 2,
        description: "Sound Mixing",
      },
      {
        id: 3,
        description: "Music",
      },
      {
        id: 4,
        description: "Color Grading",
      },
      {
        id: 5,
        description: "Visual Effects Insertion",
      },
      {
        id: 6,
        description: "Supervising",
      },
      {
        id: 7,
        description: "Final Editing",
      },

      {
        id: 8,
        description: "Project Submission",
      },
    ],
    showImage: true,
  },
  {
    id: 6,
    title: "Delivery",
    img: "https://i.ibb.co/VVRPXXD/delivery.png",
    showImage: false,
  },
];

const Production = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },

    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 1, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 4, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });

  return (
    <ProductionWrapper className="relative">
      <div id="production" className="lg:block md:block hidden ">
        <Headline content="Production Proces" lastWord="s" />
        <Content content="Six Individual Phases of A Production" />

        <div className=" pt-24 bg-[#F45656] h-[750px] ">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            cssMode={true}
            navigation={true}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
            breakpoints={{
              440: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {productionData.map((data) => (
              <SwiperSlide key={data._id}>
                <img
                  className="w-[310px] mx-auto mb-5"
                  src={data?.img}
                  alt=""
                />
                <p className="title mb-6">{data?.title}</p>
                <div
                  style={{
                    width: "210px",
                  }}
                  className="text-left mx-auto text-white"
                >
                  {data?.list?.slice(0, 2).map((l) => (
                    <div>
                      -
                      <p
                        title={l?.description}
                        className="hover:cursor-pointer text-base  subtitle"
                      >
                        {l?.description}
                      </p>
                    </div>
                  ))}
                  <div>
                    {data.showImage === true && (
                      <div className="relative">
                        <img
                          className="w-12 mx-auto mt-4"
                          src="https://i.ibb.co/8sQmfKL/211688-forward-arrow-icon-1-1.png"
                          alt="arrow"
                        />
                        <div
                          style={{
                            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                            borderRadius: "6px",
                          }}
                          className="z-20  bg-[#FCFCFC] text-[#F45656] w-52 top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 -mt-3 mx-auto"
                        >
                          {/* Dropdown Content */}
                          <div className="p-4">
                            {/* Dropdown Items */}
                            <ul>
                              {data?.list?.slice(2, 16).map((l) => (
                                <li
                                  title={l?.description}
                                  className="hover:cursor-pointer text-base"
                                >
                                  {l?.description}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* // mobile device */}
      <div id="production" className="block md:hidden lg:hidden mt-12">
        <Headline content="Production Proces" lastWord="s" />
        <p className="-mt-4 mb-2 text-[#B19B9B]" style={{ fontSize: "12px" }}>
          Six Individual Phases of A Production
        </p>

        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {productionData.map((data) => (
              <div key={data._id} className="keen-slider__slide">
                <p className="title mb-6">{data?.title}</p>
                <img
                  className="w-[310px] mx-auto mb-5"
                  src={data?.img}
                  alt=""
                />
                <div className="mb-12">
                  {data?.list?.slice(0, 8).map((l) => (
                    <div
                      style={{
                        width: "240px",
                        marginLeft: "auto",
                        marginRight: "auto",
                        
                      }}
                      className="flex items-center "
                    >
                      <img
                        className="mr-3"
                        src="https://i.ibb.co/rb2nHDR/Exclude.png"
                        alt=""
                        srcset=""
                      />
                      <div className="">
                        <p
                          title={l?.description}
                          className="hover:cursor-pointer text-base subtitle"
                        >
                          {l?.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={"dot" + (currentSlide === idx ? " active" : "")}
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </ProductionWrapper>
  );
};

const ProductionWrapper = styled.div`
  :root {
    --swiper-navigation-size: 20px !important;
  }
  .swiper,
  swiper-container {
    padding-left: 96px !important;
    padding-right: 96px !important;
  }
  .swiper-button-prev {
    font-size: 20px !important;
    width: 47px;
    height: 49px;
    color: red;
    border-radius: 50%;

    background: #fff8f8;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }
  .swiper-button-next {
    font-size: 20px !important;
    width: 47px;
    height: 49px;
    color: red;
    border-radius: 50%;
    background: #fff8f8;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
  }

  .swiper-button-next:after,
  .swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: 20px !important;
    text-transform: none !important;
    letter-spacing: 0;
    font-feature-settings: ;
    font-variant: initial;
    line-height: 1;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: rgba(15, 16, 11, 0.8);
    @media only screen and (max-width: 440px) {
      font-size: 14px;
      color: #0f100b;
    }
  }
  .subtitle {
    margin-left: 5px;
    display: inline;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
    @media only screen and (max-width: 440px) {
      font-size: 12px;
      color: #5a5a5a;
    }
  }
`;
export default Production;
