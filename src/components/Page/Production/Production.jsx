import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import research from "../../../Assets/production/research.png";
import projectdevelopment from "../../../Assets/production/projectdevelopment.png";
import preproduction from "../../../Assets/production/preproduction.png";
import shooting from "../../../Assets/production/shooting.png";
import postproduction from "../../../Assets/production/postproduction.png";
import delivery from "../../../Assets/production/delivery.png";

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
import {

  BiDownArrow,

} from "react-icons/bi";
const productionData = [
  {
    id: 1,
    title: "Research",
    img: research,
    list: [
      {
        id: 1,
        description: "Scripting",
      },
      {
        id: 2,
        description: "Script Analysis",
      },
      {
        id: 3,
        description: "Research",
      },
    ],
    showImage: false,
  },
  {
    id: 2,
    title: "Project Development",
    img: projectdevelopment,
    list: [
      {
        id: 1,
        description: "Budget",
      },
      {
        id: 2,
        description: "PR Branding Design",
      },
    ],
    showImage: false,
  },
  {
    id: 3,
    title: "Pre Production",
    img: preproduction,

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
        description: "Location Recce",
      },
      {
        id: 4,
        description: "Costume Design",
      },
      {
        id: 5,
        description: "Props & Set Design",
      },
      {
        id: 6,
        description: "Equipment List",
      },
      {
        id: 7,
        description: "Location List",
      },

      {
        id: 8,
        description: "Directors’ Feedback",
      },
      {
        id: 9,
        description: "Producers’ Feedback",
      },
      {
        id: 10,
        description: "1st Pre-Production Meeting (PPM)",
      },
      {
        id: 11,
        description: "Shot Division",
      },
      {
        id: 12,
        description: "Storyboard",
      },
      {
        id: 13,
        description: "Permission and Insurance",
      },
      {
        id: 14,
        description: "2nd PPM(if needed)",
      },
    ],
    showImage: true,
  },
  {
    id: 4,
    title: "Shooting or Production",
    img: shooting,
    list: [
      {
        id: 1,
        description: "Shooting & Management",
      },
    ],
    showImage: false,
  },
  {
    id: 5,
    title: "Post Production",
    img: postproduction,
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
        description: "Music Editing",
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
    ],
    showImage: true,
  },
  {
    id: 6,
    title: "Delivery",
    img: delivery,
    list: [
      {
        id: 1,
        description: "Project Submission",
      },
    ],
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

  const [dropdownHeight, setDropdownHeight] = useState("h-0");
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setActiveDropdown(activeDropdown === id ? null : id);
  };

  return (
    <ProductionWrapper className="relative">
      <div id="production" className="lg:block md:block hidden ">
        <Headline content="Production Proces" lastWord="s" />
        <Content content="Six Individual Phases of a Production" />

        <div className=" pt-24 bg-[#F45656] h-[650px] ">
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
                <div className="">
                  <img
                    className="w-[220px] mx-auto mb-5"
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
                    {data?.list?.slice(0, 3).map((l) => (
                      <div>
                        -
                        <p
                          style={{ width: "230px" }}
                          title={l?.description}
                          className="hover:cursor-pointer text-base  subtitle"
                        >
                          {l?.description}
                        </p>
                      </div>
                    ))}
                    <div>
                      {data.showImage === true && (
                        <div>
                          <img
                            className="w-8 animate-bounce mx-auto mt-4 cursor-pointer"
                            src="https://i.ibb.co/8sQmfKL/211688-forward-arrow-icon-1-1.png"
                            alt="arrow"
                            onClick={() => toggleDropdown(data.id)}
                          />
                          {activeDropdown === data.id && (
                            <div
                              style={{
                                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                                borderRadius: "6px",
                              }}
                              className="p-4 bg-[#FCFCFC] text-[#F45656] w-52 top-0 left-0 mx-auto"
                            >
                              {/* Dropdown Items */}
                              <ul>
                                {data?.list?.slice(3, 16).map((l) => (
                                  <li
                                    key={l?.description}
                                    title={l?.description}
                                    className="hover:cursor-pointer text-base"
                                  >
                                    <div>-{l?.description}</div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
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
          Six Individual Phases of a Production
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
                <div className="mb-5">
                  {data?.list?.slice(0, 3).map((l) => (
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
                  {data.showImage === true ? (
                    <div className="">
                      <BiDownArrow className="w-12  ml-auto mr-20 -mt-4 animate-bounce animation-duration-1000 animation-timing-linear" />
                      <div
                        className={`text-[#F45656] w-[275px] top-0 left-0 opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 -mt-1 mx-auto ${dropdownHeight}`}
                        onClick={() =>
                          setDropdownHeight(
                            dropdownHeight === "h-0" ? "h-40" : "h-0"
                          )
                        }
                      >
                        {/* Dropdown Content */}
                        <div className="p-4">
                          {/* Dropdown Items */}
                          <ul>
                            {data?.list?.slice(3, 16).map((l) => (
                              // <li
                              //   title={l?.description}
                              //   className="hover:cursor-pointer text-base subtitle"
                              // >
                              //   {l?.description}
                              // </li>
                              <div
                                style={{
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="h-0"></div>
                  )}
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
    text-align: left;
    width: 200px;
    margin: auto;
    height: 72px;
    font-weight: 600;
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      color: #0f100b;
      text-align: center;
      margin: auto;
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
    @media only screen and (max-width: 767px) {
      font-size: 12px;
      color: #5a5a5a;
    }
  }
`;
export default Production;
