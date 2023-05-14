import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../../Styles/Banner.css";
import banner from "../../../Assets/Banner/banner.png";
import { ContactWrapper } from "../Contact/Contact";

const images = [banner, banner, banner];

const Banner = () => {
  const [opacities, setOpacities] = React.useState([]);

  const [sliderRef] = useKeenSlider({
    slides: images.length,
    loop: true,
    detailsChanged(s) {
      const new_opacities = s.track.details.slides.map(
        (slide) => slide.portion
      );
      setOpacities(new_opacities);
    },
  });

  return (
    <>
      <img
        className=""
        src="https://i.ibb.co/282GgY7/Picsart-23-04-14-13-07-37-128.jpg"
        alt="banner"
      />
    </>
  );
};
export default Banner;
