import React, { useState } from "react";
import Headline from "../../TextComponents/Headline";
import { BiVideoRecording } from "react-icons/bi";
import img1 from "../../../Assets/services/1. Cinema.png";
import img2 from "../../../Assets/services/2. Documentary.png";
import img3 from "../../../Assets/services/3. Music Video.png";
import img4 from "../../../Assets/services/4. TVC.png";
import img5 from "../../../Assets/services/5. OVC.png";
// import img5 from "../../../Assets/services/Group 111.png";
import img6 from "../../../Assets/services/6.Event Documentation.png";
import img7 from "../../../Assets/services/7. Promotional Content.png";
import img8 from "../../../Assets/services/8. Collaboration.png";
import img9 from "../../../Assets/services/8. PHOTOGRAPHY (1).png";
import img10 from "../../../Assets/services/7. LIVE STREAMING & BROADCASTING.png";
import { useKeenSlider } from "keen-slider/react";
import "./Service.css";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import styled from "styled-components";
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
    <ServiceWrapper>
      {" "}
      <div id="service" className="relative">
        <div className="lg:mx-24 mx-8 md:mx-16 pt-8 mb-8 lg:block hidden md:block ">
          <Headline content="service" lastWord="s" />
          <div className="grid 2xl:grid-cols-4  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 ">
            {/* {servicesData.map((data) => (
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
             width: "409px",
             height: "231px",
           }}
           src={data.image}
           alt=""
         />
         <div
           className="text-white"
           style={{
             position: "absolute",
             top: "45%",
             left: "50%",
             transform: "translate(-50%, -50%)",
             transition: "opacity 0.3s ease",
             fontSize: "29px",
           }}
         >
           {data?.title}
           <p className="text-xs text-white text-center">
             {hoveredId === data._id && data.content}
           </p>
         </div>
       </div>
     ))} */}
            {servicesData.map((data) => (
              <div
                key={data._id}
                className=""
                style={{ position: "relative" }}
                onMouseEnter={() => handleMouseEnter(data._id)}
                onMouseLeave={handleMouseLeave}
              >
                {hoveredId === data._id ? (
                  <div
                    className="hovered-img service-image"
                    style={{
                      height: "231px",
                      background: "#f45656",
                      position: "relative",
                      border: "1px solid black",
                    }}
                  >
                    <img
                      className=""
                      style={{
                        width: "310px",
                        height: "231px",
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        left: 0,
                        transition: "opacity 0.3s ease",
                      }}
                      src={data.image}
                      alt=""
                    />
                    <div
                      className="text-white font"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "opacity 0.3s ease",

                        textAlign: "center",
                      }}
                    >
                      {data.title}
                      <p className="text-xs text-white text-center">
                        {data.content}
                      </p>
                    </div>
                  </div>
                ) : (
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
                        width: "310",
                        height: "231px",
                      }}
                      src={data.image}
                      alt=""
                    />
                    <div
                      className="text-white font"
                      style={{
                        position: "absolute",
                        top: "45%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        transition: "opacity 0.3s ease",
                      }}
                    >
                      {data?.title}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* //for mobile device */}
        <div className="lg:mx-24 mx-8 md:mx-16 my-8 lg:hidden block md:hidden">
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
                      width: "auto",
                      margin: "auto",
                      height: "231px",
                      background: "transparent", // Set the background to transparent
                    }}
                    src={data.image}
                    alt=""
                  />
                  <div
                    className="text-white  text-3xl hover:cursor-pointer "
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      transition: "opacity 0.3s ease",
                      fontSize: "24px",
                    }}
                  >
                    {data?.title}

                    <p className="text-xs hover:cursor-pointer mt-3  text-white text-center">
                      {data.content}
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

        {/* social media */}
        <div
          style={{
            top: "45%",
            right: "0%",
            width: "65px",
            height: "247px",
            background: "rgba(15, 16, 11, 0.81)",
            clipPath: "polygon(10% 0, 100% 13%, 100% 85%, 9% 90%)",
          }}
          className="absolute hidden lg:flex md:hidden items-center justify-center"
        >
          <SocialMedia />
        </div>
      </div>
    </ServiceWrapper>
  );
};

export default Service;

const ServiceWrapper = styled.div`
  .font {
    font-size: 29px;
    @media screen and (min-width: 1024px) and (max-width: 1330px) {
      font-size: 23px;
    }
  }
`;
const servicesData = [
  {
    _id: 1,
    image: img1,
    title: "CINEMA",
    icon: (
      <p style={{ width: "33px", height: "33px" }}>
        <BiVideoRecording />
      </p>
    ),
    content:
      "Cinema means something special to us, We believe that we are born to make cinema We prioritize aesthetic senses and the narrative style to make ful package of senses, story and social needs.",
  },
  {
    _id: 2,
    image: img2,
    title: "DOCUMENTARY",
    icon: <BiVideoRecording />,
    content:
      "We at Film Monks are dedicated to produce visually stunning, impactful documentary films. Our team of filmmakers and fine-art photographers bring meaningful stories to the big screen.",
  },

  {
    _id: 3,
    image: img3,
    title: "MUSIC VIDEO ",
    icon: <BiVideoRecording />,
    content:
      "We brings a unique and visually stunning approach to music video production. Our team work closely with artists to bring their creative vision to life.",
  },
  {
    _id: 4,
    image: img4,
    title: "TVC",
    icon: <BiVideoRecording />,
    content:
      "As a full-service video production studio, Film Monks offers a wide range of services for Television Commercial productions, bringing their unique perspective and artistic skills to every project production company.",
  },
  {
    _id: 5,
    image: img5,
    title: "OVC",
    icon: <BiVideoRecording />,
    content:
      "Film Monks is a full-service video the production company that offers a wide range of services for online video commercials.",
  },
  {
    _id: 6,
    image: img6,
    title: "EVENT DOCUMENTATION",
    icon: <BiVideoRecording />,
    content:
      "Our team members are ready to catch any event with a different polished view and proper technical support. ",
  },
  {
    _id: 7,
    image: img10,
    title: "LIVE STREAMING & BROADCASTING",
    icon: <BiVideoRecording />,
    content:
      "Our team, with advanced technology for live streaming and broadcasting, is ready top resent any event or program directly to the audience.",
  },
  {
    _id: 8,
    image: img9,
    title: "PHOTOGRAPHY",
    icon: <BiVideoRecording />,
    content:
      "From event photography to studio photography for packshots, products, and many more, we are totally ready to bring the best out of it.. ",
  },
  {
    _id: 9,
    image: img7,
    title: "PROMOTIONAL CONTENT",
    icon: <BiVideoRecording />,
    content:
      "Every kind of promotional video that perfectly promote the subject with visuals, we are ready to make.",
  },
  {
    _id: 10,
    image: img8,
    title: "COLLABORATION",
    icon: <BiVideoRecording />,
    content:
      "We, the Film Monks team could collaborate with any other teams to lead a audio-visual production.",
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
