import React, { useState } from "react";
import Headline from "../../TextComponents/Headline";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Team.css";
import styled from "styled-components";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import { FaFacebook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { SiFacebook } from "react-icons/si";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";

import img1 from "../../../Assets/MonksGalary/AllPhotos/images/1.png";
import img2 from "../../../Assets/MonksGalary/AllPhotos/images/2.png";
import img3 from "../../../Assets/MonksGalary/AllPhotos/images/3.png";
import img4 from "../../../Assets/MonksGalary/AllPhotos/images/4.png";
import img5 from "../../../Assets/MonksGalary/AllPhotos/images/5.png";
import img6 from "../../../Assets/MonksGalary/AllPhotos/images/6.png";
import img7 from "../../../Assets/MonksGalary/AllPhotos/images/7.png";
import { Link } from "react-router-dom";
import fb from "../../../Assets/SocialMedia/5305154_fb_facebook_facebook logo_icon 3.png";
// import mail from "../../../Assets/SocialMedia/1564504_email_letter_mail_message_icon (1) 2.png";
import linkedin from "../../../Assets/SocialMedia/2986200_linkdin_logo_media_social_icon 2.png";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
// import { useEffect } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGet from "../../../hooks/useGet";

const Team = () => {
  const url = "http://localhost:5000/api/teams";
  const { dataSource, loading, error } = useGet(url);
  console.log(dataSource);
  console.log(teamData);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [copiedEmail, setCopiedEmail] = useState("");

  const handleCopyEmail = (email) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    notify();
  };
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  const notify = () => toast("Email is copied");
  return (
    <TeamWrapper id="team" className="relative ">
      <div
        className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center xl:h-[420px] lg:h-[420px]
    pt-12 lg:block hidden "
      >
        <Headline
          style={{ color: "white" }}
          content="Meet The Tea"
          lastWord="m"
        />

        <div className="mx-auto xl:w-[70%] lg:w-[80%] mt-10">
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
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
          >
            {dataSource.map((data) => (
              <SwiperSlide key={data._id}>
                <div className="relatives group ">
                  <img
                    className="w-[250px] mx-auto mb-5"
                    src={`http://localhost:5000/team/` + data?.image}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:brightness-200   transition-opacity duration-600 ease-in-out">
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <Link to={data.fb_link} target="_blank">
                        <SiFacebook className="text-3xl  xl:-mt-10 lg:-mt-20 " />
                      </Link>
                      <Link to={data.linkedin} target="_blank">
                        <IoLogoLinkedin className="text-3xl  xl:mt-3 lg:-mt-9 " />
                      </Link>
                    </div>
                  </div>
                </div>

                <h5 className="name">{data?.name}</h5>
                <p className="title">{data?.title}</p>

                <p
                  className="title absolute"
                  onClick={() => handleCopyEmail(data?.email)}
                  style={{ cursor: "pointer", left: "20%" }}
                >
                  {data?.email}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* mobile device */}
      <div className="block lg:hidden md:block">
        <Headline content="Meet The Tea" lastWord="m" />
        <div
          id="team"
          className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center h-[400px]
    pt-24 block lg:hidden mt-6"
        >
          <div className="navigation-wrapper  relative mt-10">
            <div ref={sliderRef} className="keen-slider">
              {dataSource.map((data) => (
                <div key={data._id} className="keen-slider__slide  mb-10">
                  <div className="relative group">
                    <img
                      className="w-[250px] mx-auto mb-5"
                      src={`http://localhost:5000/team/` + data?.image}
                      alt=""
                    />
                  </div>
                  <h5 className="name">{data?.name}</h5>
                  <p className="title">{data?.title}</p>
                  <p
                    className="title "
                    onClick={() => handleCopyEmail(data?.email)}
                    style={{ cursor: "pointer", left: "10%" }}
                  >
                    <MdEmail
                      className="mr-1"
                      style={{ display: "inline-block" }}
                    />
                    {data?.email}
                  </p>

                  <div className="w-4 mx-auto" style={{ display: "flex" }}>
                    <p className="title">
                      {" "}
                      <Link to={data.fb_link} target="_blank">
                        <FaFacebook
                          className="-ml-3"
                          style={{ display: "inline-block" }}
                        />
                      </Link>
                    </p>
                    <p className="title">
                      {" "}
                      <Link to={data.linkedin} target="_blank">
                        <FaLinkedinIn
                          className="ml-3"
                          style={{ display: "inline-block" }}
                        />
                      </Link>
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
                  // disabled={
                  //   currentSlide ===
                  //   instanceRef.current.track.details.slides.length - 1
                  // }
                />
              </>
            )}
          </div>
        </div>{" "}
      </div>
      <div
        style={{
          top: "45%",
          right: "1%",
        }}
        className="absolute hidden lg:flex md:flex items-center justify-center"
      >
        <SocialMedia />
      </div>
      <ToastContainer />
    </TeamWrapper>
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
const TeamWrapper = styled.div`
  .hover:brightness-50:hover {
    filter: brightness(50%);
  }
  .name {
    text-transform: uppercase;
    margin-top: 36px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  .title {
    text-transform: capitalize;
    margin-top: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
  }

  :root {
    --swiper-navigation-size: 20px !important;
  }
  .swiper,
  swiper-container {
    height: 365px;
    padding-left: 96px !important;
    padding-right: 96px !important;
  }
  .swiper-button-prev {
    font-size: 20px !important;
    width: 47px;
    height: 49px;
    color: #fff8f8;
  }
  .swiper-button-next {
    font-size: 20px !important;
    width: 47px;
    height: 49px;
    color: #fff8f8;
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
`;
export default Team;

const teamData = [
  {
    id: 1,
    name: "SHITHE DEBNATH",
    title: "Co-Founder, Producer",
    email: "shithe.deb@gmail.com",
    fb_link: "https://www.facebook.com/shithe.debnath",
    linkedin: "https://www.linkedin.com/in/shithe-debnath-b19465271",
    img: img1,
  },
  {
    id: 2,
    name: "JAYNTO KUNDU",
    title: "Co-Founder, Director",
    email: "jaynto.k.kundu@gmail.com",
    fb_link: "https://www.facebook.com/profile.php?id=100011977185218",
    linkedin: "https://www.linkedin.com/in/jaynto-kumar-kundu-4679621a0",
    img: img2,
  },
  {
    id: 3,
    name: "ANIRBAN SAHA",
    title: "Head of Research & Assistant Director",
    email: "anirbansahaarpon@gmail.com",
    fb_link: "https://www.facebook.com/aami.anirban",
    linkedin: "https://www.linkedin.com/in/anirbansahaarpon",
    img: img3,
  },
  {
    id: 4,
    name: "EBSAN ZAMAN",
    title: "Editor",
    email: "ebsanzaman404@gmail.com",
    fb_link: "https://www.facebook.com/ebsanzaman.ebsanzaman",
    linkedin: "https://www.linkedin.com/in/ebsan-zaman-3159aa277/",
    img: img5,
  },
  {
    id: 5,
    name: "SUDIPTA DEBNATH",
    title: "PR Executive",
    email: "sudiptadtoma@gmail.com",
    fb_link: "https://www.facebook.com/sudipta.debnath.148",
    linkedin: "https://www.linkedin.com/in/debnath-sudipta",
    img: img4,
  },
  {
    id: 6,
    name: "SAMIYA ATHAY",
    title: "Line Producer",
    email: "samiyaathay@gmail.com",
    fb_link: "https://www.facebook.com/athay.udhay",
    linkedin: "https://www.linkedin.com/in/samia-athay-1953b2276/",
    img: img6,
  },
  {
    id: 7,
    name: "MONJURI BISWAS",
    title: "Assistant Director",
    email: "moonjuribiswas@gmail.com",
    fb_link: "https://www.facebook.com/monjuri.biswas.5",
    linkedin: "https://www.linkedin.com/in/monjuri-biswas-85b289276/",
    img: img7,
  },
];
