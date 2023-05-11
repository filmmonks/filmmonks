import { Card, CardActionArea, CardMedia } from "@mui/material";
import React, { useState } from "react";
import Headline from "../../TextComponents/Headline";
import Content from "../../TextComponents/Content";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Team = () => {
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
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 10 },
      },
    },
    slides: { perView: 1 },
  });
  return (
    <div
      id="team"
      className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center h-[75vh]
    pt-12"
    >
      <Headline content="Meet The Tea" lastWord="m" />
      {/* <Content
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel expedita
        quo molestias quod amet consequatur molestiae veniam suscipit,
        reprehenderit assumenda!"
      /> */}

      <div className=" w-[1150px] mx-auto mt-8">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {teamData.map((data) => (
              <>
                <div className="keen-slider__slide number-slide2">
                  <div class="">
                    <a
                      class="relative block w-[330px] 
                      group"
                      href="##"
                    >
                      <div>
                        {" "}
                        <img
                          className="w-[330px] hover:brightness-50 absolute inset-0 
                   group-hover:brightness-50  "
                          src={data.img}
                          alt={data.id}
                          srcset=""
                        />
                        {/* <p className="text-xs text-[#000000]">{data?.name}</p> */}
                      </div>

                      <div class="relative ">
                        <div class="mt-2">
                          <div
                            class="transition-all duration-500 transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                          >
                            <div class="p-16">
                              <div className="flex flex-col">
                                {" "}
                                <Link to={data.fb_link}>
                                  <button
                                    class="px-4 text-lg 
                                            text-white"
                                  >
                                    <SiFacebook />
                                  </button>
                                </Link>
                                <Link>
                                  {" "}
                                  <button
                                    class="px-4  text-lg
                                            text-white"
                                  >
                                    <FaInstagramSquare />
                                  </button>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </>
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
    </div>
  );
};

export default Team;

const teamData = [
  {
    id: 1,
    name: "SHITHE DEBNATH",
    title: "Co-Founder, Producer",
    email: "shithe.deb@gmail.com",
    fb_link: "https://www.facebook.com/shithe.debnath",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
  },
  {
    id: 2,
    name: "JAYNTO KUMAR KUNDU",
    title: "Co-Founder, Director",
    email: "jaynto.k.kundu@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100011977185218",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
  },
  {
    id: 3,
    name: "ANIRBAN SAHA",
    title: "Head of Research",
    email: "anirbansahaarpon@gmail.com",
    fb_link: "https://www.facebook.com/aami.anirban",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
  },
  {
    id: 4,
    name: "JAYNTO KUMAR KUNDU",
    title: "Co-Founder, Director",
    email: "jaynto.k.kundu@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100011977185218",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
  },
  {
    id: 5,
    name: "SHIBLY SADIK",
    title: "Brand Manager",
    email: "shibly209@gmail.com",
    fb_link: "https://www.facebook.com/shiblysadik.sifat",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
  },
  {
    id: 6,
    name: "EBSAN ZAMAN",
    title: "Editor",
    email: "ebsanzaman404@gmail.com",
    fb_link: "https://www.facebook.com/ebsanzaman.ebsanzaman",
    img: "https://i.ibb.co/Lxbj87n/Ellipse-7.png",
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
