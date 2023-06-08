import React from "react";
import Iframe from "react-iframe";
import { MdEmail } from "react-icons/md";
import img from "../../../Assets/Footer/footer.png";
import { BsTelephoneFill } from "react-icons/bs";
import fb from "../../../Assets/SocialMedia/5305154_fb_facebook_facebook logo_icon 3.png";
import youtube from "../../../Assets/SocialMedia/2559760_media_social_video_youtube_icon 2.png";
import instagram from "../../../Assets/SocialMedia/7693314_instagram_social media_logo_apps_icon 2.png";
import linkedin from "../../../Assets/SocialMedia/2986200_linkdin_logo_media_social_icon 2.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterWrapper className="lg:mt-72 md:mt-72 mt-48">
      <footer style={{ background: `url(${img})`, backgroundSize: "cover" }}>
        <div className="flex flex-wrap mx-auto lg:p-28 text-[#fff]">
          <div className="lg:pl-24 mx-auto">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8461568244334!2d90.34635957501477!3d23.752864878668586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfeab55c7a9b%3A0x861f0388bf993bce!2sFilm%20Monks%20Art%20House!5e0!3m2!1sen!2sbd!4v1685782334781!5m2!1sen!2sbd"
              // width="509px"
              // height="316px"
              id=""
              className="xl:w-[509px] lg:h-[316px] h-[190px] mx-auto my-10 rounded-md"
              display="block"
              position="relative"
              loading="lazy"
            />
          </div>
          <div className="flex flex-wrap lg:px-12 px-5">
            <div className="lg:mx-10 mx-7">
              <h3 className="text-[#F45656] font-bold lg:text-2xl md:text-lg text-lg  text-left">
                Office
              </h3>
              <p className="link link-hover font-bold my-2 text-left lg:text-xl md:text-xl text-lg">
                Connect Us
              </p>
              <p className="link link-hover text-[#B19B9B] mb-4 text-left  lg:text-lg md:text-lg text-base">
                Office Address: House 12,
                <br /> Block C, Future Town <br /> Housing, Mohammadpur,
                <br /> Dhaka-1207
              </p>
              <p className="link link-hover text-[#B19B9B] flex items-center my-2">
                <MdEmail className="mr-3 lg:text-lg md:text-lg text-base text-[#fff]" />
                <span className="lg:text-lg md:text-lg text-base">
                  {" "}
                  officialfilmmonks@gmail.com
                </span>
              </p>
              <p className="link link-hover text-[#B19B98] flex items-center">
                <BsTelephoneFill className="mr-3 text-[#fff] lg:text-lg md:text-lg text-base" />
                <span className="lg:text-lg md:text-lg text-base">
                  {" "}
                  +8801327114855
                </span>
              </p>{" "}
            </div>
            <div className="lg:mx-10 mx-7 my-8 flex flex-col lg:items-center">
              <p className="link link-hover font-bold text-left lg:text-xl md:text-lg text-base">
                Follow Us On
              </p>

              <div style={{ display: "flex" }}>
                <p className="link link-hover text-xl my-5 mx-2">
                  <Link
                    to="https://www.facebook.com/filmmonksarthouse"
                    target="_blank"
                  >
                    {" "}
                    <img src={fb} alt="" />
                  </Link>
                </p>
                <p className="link link-hover text-xl my-5 mx-2">
                  <Link
                    to="https://www.youtube.com/@filmmonks"
                    target="_blank"
                  >
                    {" "}
                    <img src={youtube} alt="" />
                  </Link>
                </p>

                <p className="link link-hover text-xl my-5 mx-2">
                  <Link
                    to="https://www.linkedin.com/company/91148823/admin/"
                    target="_blank"
                  >
                    {" "}
                    <img src={linkedin} alt="" />
                  </Link>
                </p>
                <p className="link link-hover text-xl my-5 mx-2">
                  <Link
                    to="https://www.instagram.com/filmmonksarthouse/"
                    target="_blank"
                  >
                    {" "}
                    <img src={instagram} alt="" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center bg-[#000] lg:px-[200px] px-5 text-[#fff] lg:py-7 py-1">
          <p className="mr-40 hidden lg:block">Dhaka, Bangladesh </p>
          <p>&copy; 2023 Film monks. All Rights Reserved </p>
        </div>
      </footer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div``;
export default Footer;
