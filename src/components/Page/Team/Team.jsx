import React, { useState } from "react";
import Headline from "../../TextComponents/Headline";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./Team.module.css";
import styled from "styled-components";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import { FaFacebook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Mousewheel, Navigation, Pagination } from "swiper";
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
  });

  return (
    <TeamWrapper className="relative">
      <div
        id="team"
        className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center h-[60vh]
    pt-12 lg:block hidden "
      >
        <Headline
          style={{ color: "white" }}
          content="Meet The Tea"
          lastWord="m"
        />

        <div className="mx-auto w-[70%] mt-20">
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
            {teamData.map((data) => (
              <SwiperSlide key={data._id}>
                <img
                  className="w-[250px] mx-auto mb-5 hover:brightness-50 relative z-10"
                  src={data?.img}
                  alt=""
                />
                <div className="absolute top-0 left-0 z-20 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FaFacebook size={30} className="text-white mt-5" />
                    <FaFacebook size={30} className="text-white mt-5" />
                    <FaFacebook size={30} className="text-white mt-5" />
                  </div>
                </div>
                <h5 className="name">{data?.name}</h5>
                <p className="title">{data?.title}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* mobile device */}
      <div className="block lg:hidden">
        <Headline content="Meet The Tea" lastWord="m" />
        <div
          id="team"
          className="bg-[url('https://i.ibb.co/d4ndNdd/Rectangle-79.png')] bg-cover bg-center h-[30vh]
    pt-8 block lg:hidden mt-6"
        >
          <div className="navigation-wrapper  relative mt-8">
            <div ref={sliderRef} className="keen-slider">
              {teamData.map((data) => (
                <div key={data._id} className="keen-slider__slide">
                  <img
                    className="w-[250px] mx-auto mb-5"
                    src={data?.img}
                    alt=""
                  />
                  <h5 className="name">{data?.name}</h5>
                  <p className="title">{data?.title}</p>
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
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
  }
  .title {
    margin-top: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
  }

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
