import React from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";
import "./Production.module.css";
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

    // breakpoints: {
    //   "(min-width: 400px)": {
    //     slides: { perView: 1, spacing: 10 },
    //   },
    //   "(min-width: 1000px)": {
    //     slides: { perView: 3, spacing: 10 },
    //   },
    // },
    // slides: { perView: 1 },
  });
  return (
    <>
      <div id="production" className="lg:block md:block hidden">
        <Headline content="Production Proces" lastWord="s" />
        <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
        <div style={{ height: "313px" }} className="bg-[#F45656]"></div>

        <div className="grid grid-cols-4 mx-28 mb-64">
          {productionData.map((data) => (
            <div style={{ marginTop: "-240px" }} className="ml-4">
              {" "}
              <div className="card">
                <img src={data?.img} alt="" />
                <p className="text-center my-4 capitalize">{data?.title}</p>

                <div>
                  {data.list.slice(0, 3).map((l) => (
                    <div
                      style={{
                        width: "185px",
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
                      <div>
                        {l.description.length > 15 ? (
                          <p
                            title={l.description}
                            className="hover:cursor-pointer"
                          >
                            {l.description.slice(0, 15) + "..."}{" "}
                          </p>
                        ) : (
                          <p
                            title={l.description}
                            className="hover:cursor-pointer"
                          >
                            {l.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  <img
                    className="bg-[#F45656] ml-auto w-[20px]"
                    src="https://i.ibb.co/m04ghjk/211688-forward-arrow-icon-1.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="production" className="block md:hidden lg:hidden">
        <Headline content="Production Proces" lastWord="s" />
        {/* <Content content="Lorem ipsum dolor sit amet consectetur. Lorem adipiscing erat sit sapien ornare morbin dd we  can understand the fact po of film  " />
         */}

        {/* <div className="grid grid-cols-4 mx-28 mb-64">
          {productionData.map((data) => (
            <div style={{ marginTop: "-240px" }} className="ml-4">
              {" "}
              <div className="card">
                <img src={data?.img} alt="" />
                <p className="text-center my-4 capitalize">{data?.title}</p>

                <div>
                  {data.list.slice(0, 3).map((l) => (
                    <div
                      style={{
                        width: "185px",
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
                      <div>
                        {l.description.length > 15 ? (
                          <p
                            title={l.description}
                            className="hover:cursor-pointer"
                          >
                            {l.description.slice(0, 15) + "..."}{" "}
                          </p>
                        ) : (
                          <p
                            title={l.description}
                            className="hover:cursor-pointer"
                          >
                            {l.description}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  <img
                    className="bg-[#F45656] ml-auto w-[20px]"
                    src="https://i.ibb.co/m04ghjk/211688-forward-arrow-icon-1.png"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div> */}

        <div className="navigation-wrapper  relative">
          <div ref={sliderRef} className="keen-slider">
            {productionData.map((data) => (
              <div key={data._id} className="keen-slider__slide">
                <p className="title mb-6">{data?.title}</p>
                <img
                  className="w-[310px] mx-auto mb-5"
                  src={data?.img}
                  alt=""
                />
                <div>
                  {data.list.slice(0, 3).map((l) => (
                    <div
                      style={{
                        width: "185px",
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
                      <div>
                        <p
                          title={l.description}
                          className="hover:cursor-pointer text-base"
                        >
                          {l.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
const productionData = [
  {
    id: 1,
    title: "research",
    img: "https://i.ibb.co/BnhsYjr/Research.jpg",
    list: [
      {
        id: 1,
        description: "Reference Findings",
      },
      {
        id: 2,
        description: "Analyses",
      },
      {
        id: 3,
        description: " Research File",
      },
    ],
  },
  {
    id: 2,
    title: "Pre Production",
    img: "https://i.ibb.co/tJ3NppM/Pre-production.jpg",

    list: [
      {
        id: 1,
        description: " Finalizing the script",
      },
      {
        id: 2,
        description: "Budget",
      },
      {
        id: 3,
        description: "Script Breakdown",
      },
      {
        id: 4,
        description: "Selection of the Casts and Crews",
      },
      {
        id: 5,
        description: "Finding Locations",
      },
      {
        id: 6,
        description: "Crew Orientation and Briefing",
      },
      {
        id: 7,
        description: "1st Pre Production Meeting(PPM)",
      },

      {
        id: 8,
        description: "Location Recce",
      },
      {
        id: 9,
        description: "Finalizing Costumes",
      },
      {
        id: 10,
        description: "Finalizing Props & Set Design",
      },
      {
        id: 11,
        description: "Finalizing department based decisions",
      },
      {
        id: 12,
        description: "Permission and Insurance",
      },
      {
        id: 13,
        description: "2nd PPM",
      },
      {
        id: 14,
        description: "Shot Division",
      },
      {
        id: 15,
        description: "Storyboard",
      },
      {
        id: 16,
        description: "Rehearsal",
      },
      {
        id: 17,
        description: "3rd PPM",
      },
    ],
  },
  {
    id: 3,
    title: "Production",
    img: "https://i.ibb.co/r7PzXWL/Production.png",
    list: [
      {
        id: 1,
        description: "Shoot days",
      },
    ],
  },
  {
    id: 4,
    title: "Post Production",
    img: "https://i.ibb.co/JCY2GZ0/Post-Production.png",
    list: [
      {
        id: 1,
        description: " Music",
      },
      {
        id: 2,
        description: "Sound Mixing",
      },
      {
        id: 3,
        description: "First Cut",
      },
      {
        id: 4,
        description: "Color Grading",
      },
      {
        id: 5,
        description: "Visual effects",
      },
      {
        id: 6,
        description: "insertion",
      },
      {
        id: 7,
        description: "Supervising",
      },

      {
        id: 8,
        description: "Final Editing",
      },
      {
        id: 9,
        description: "Project Submission",
      },
    ],
  },
];
export default Production;
