import React from "react";
import Iframe from "react-iframe";
import { MdEmail } from "react-icons/md";
import img from "../../../Assets/Footer/footer.png";
import { BsTelephoneFill } from "react-icons/bs";
import SocialMedia from "../SocialMedia/SocialMedia";
import { ContactWrapper } from "../../Page/Contact/Contact";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper className="mt-48">
      <footer style={{ background: `url(${img})`, backgroundSize: "cover" }}>
        <div className="flex flex-col lg:flex-row lg:p-28 text-[#fff]">
          <div className="lg:pl-24">
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228.2419854550737!2d90.35181201983984!3d23.751951789120607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf661101c5e5%3A0x160da6158b1a4c30!2sBosila%20Future%20Town!5e0!3m2!1sen!2sbd!4v1677788402009!5m2!1sen!2sbd"
              // width="509px"
              // height="316px"
              id=""
              className="lg:w-[509px] lg:h-[316px] h-[190px] mx-auto my-10 rounded-md"
              display="block"
              position="relative"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:px-14 px-5">
            <div className="lg:mx-10 mx-7">
              <h3 className="text-[#F45656] font-bold lg:text-xl md:text-lg text-lg  text-left">
                Head Quarter
              </h3>
              <p className="link link-hover font-bold my-2 text-left lg:text-2xl md:text-xl text-lg">
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
                  filmmonksofficial@gmail.com
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
                Follow Us
              </p>
              <SocialMedia style={{ display: "flex" }} />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center bg-[#000] lg:px-[200px] px-5 text-[#fff] lg:py-7 py-1">
          <p className="mr-40 hidden lg:block">Dhaka, Bangladesh </p>
          <p>&copy; 2023 Filmmonks. All Rights Reserved </p>
        </div>
      </footer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div``;
export default Footer;
