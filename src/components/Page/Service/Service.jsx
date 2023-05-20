import React, { useState } from "react";
import Headline from "../../TextComponents/Headline";
import { BiVideoRecording } from "react-icons/bi";
import img1 from "../../../Assets/services/1. Cinema.jpg";
import img2 from "../../../Assets/services/2. Documentary.jpg";
import img3 from "../../../Assets/services/3. Music Video.jpg";
import img4 from "../../../Assets/services/4. TVC.jpg";
import img5 from "../../../Assets/services/5. OVC.jpg";
import img6 from "../../../Assets/services/6. Event Documentation.jpg";
import img7 from "../../../Assets/services/7. Promotional Content.jpg";
import img8 from "../../../Assets/services/8. Collaboration.jpg";
import { useKeenSlider } from "keen-slider/react";
import "./Service.css";
const Service = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

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
  });

  return (
    <>
      <div
        id="service"
        className="lg:mx-24 mx-8 md:mx-16 my-8 lg:block hidden md:block"
      >
        <Headline content="service" lastWord="s" />
        <div className="grid  xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-7 ">
          {servicesData.map((data) => (
            <div
              key={data._id}
              className=""
              style={{ position: "relative" }}
              onMouseEnter={() => handleMouseEnter(data._id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                className=""
                style={{
                  filter: "brightness(14%)",
                  width: "409px",
                  height: "231px",
                  background: "transparent", // Set the background to transparent
                }}
                src={data.image}
                alt=""
              />
              <div
                className="text-white"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  transition: "opacity 0.3s ease",
                }}
              >
                {data?.icon}
                <p className="text-xs ">
                  {hoveredId === data._id ? data.content : data.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* //for mobile device */}
      <div
        id="service"
        className="lg:mx-24 mx-8 md:mx-16 my-8 lg:hidden block md:hidden"
      >
        <Headline content="service" lastWord="s" />
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {servicesData.map((data) => (
              <div
                key={data._id}
                className="keen-slider__slide"
                style={{ position: "relative" }}
                onMouseEnter={() => handleMouseEnter(data._id)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  className=""
                  style={{
                    filter: "brightness(14%)",
                    width: "100%",
                    height: "231px",
                    background: "transparent", // Set the background to transparent
                  }}
                  src={data.image}
                  alt=""
                />
                <div
                  className="text-white"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    transition: "opacity 0.3s ease",
                  }}
                >
                  {data?.icon}
                  <p className="text-xs ">
                    {hoveredId === data._id ? data.content : data.title}
                  </p>
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

export default Service;

const servicesData = [
  {
    _id: 1,
    image: img1,
    title: "CINEMA",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 2,
    image: img2,
    title: "DOCUMENTARY",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 3,
    image: img3,
    title: "MUSIC VIDEO",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 4,
    image: img4,
    title: "TVC",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 5,
    image: img5,
    title: "OVC",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 6,
    image: img6,
    title: "EVENTS DOCUMENTATION",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 7,
    image: img7,
    title: "PROMOTIONAL CONTENT",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 8,
    image: img8,
    title: "COLLABORATION",
    icon: <BiVideoRecording />,
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritiz aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
];

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
