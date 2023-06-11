import React from "react";
import styled from "styled-components";
// import '../index.css';
import contactImg from "../../../Assets/Contact/FILM MONKS logo sign only png (1) 20.png";

import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTelephoneFill,
  BsLinkedin,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Contact() {
  return (
    <ContactWrapper className="pt-2 ">
      <form className=" lg:flex md:flex hidden justify-around items-center">
        <div className="max-w-md contact-content">
          {/* <h3>How to get in contact </h3> */}
          {/* <div className="text-left ">
            <label
              className=" text-gray-700 font-bold mb-2 text-start"
              htmlFor="name"
            >
              Drop us an email
            </label>
            <input
              className="form-input border border-gray-400 rounded w-full py-2 px-3 "
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <label className=" text-gray-700 font-bold mb-2" htmlFor="name">
              Give us a call
            </label>
            <input
              className="form-input border border-gray-400 rounded w-full py-2 px-3"
              type="number"
              id="email"
              name="phone"
              placeholder="01705099380"
            />

            
          </div> */}

          <div className=" text-left ">
            <h1 className="contact-part text-center">Pitch Us </h1>
            <p className="contact-part-p text-center p-6 my-6">
              Bring your ideas and stories to us and make it happen Send us your
              ideas or stories(Logline-Synopsis or Script) by mail along with
              your CV
            </p>
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
          <p className="link link-hover font-bold mt-4  text-left lg:text-xl md:text-xl text-lg">
            Follow Us On
          </p>
          <div className="flex justify-between  items-center mt-0 w-[200px]">
            <p className="link link-hover text-xl my-3 mx-2">
              <Link
                to="https://www.facebook.com/filmmonksarthouse"
                target="_blank"
              >
                {" "}
                <BsFacebook />
              </Link>
            </p>
            <p className="link link-hover text-xl my-3 mx-2">
              <Link
                to="https://www.instagram.com/filmmonksarthouse/"
                target="_blank"
              >
                {" "}
                <BsInstagram />
              </Link>
            </p>
            <p className="link link-hover text-xl my-3 mx-2">
              <Link to="https://www.youtube.com/@filmmonks" target="_blank">
                {" "}
                <BsYoutube />
              </Link>
            </p>
            <p className="link link-hover text-xl my-5 mx-2">
              <Link
                to="https://www.linkedin.com/company/91148823/admin/"
                target="_blank"
              >
                {" "}
                <BsLinkedin />
              </Link>
            </p>
          </div>
        </div>
        <div>
          <img
            className="w-[392px] h-[412px] mt-48"
            src={contactImg}
            alt="logo-of-site"
          />
        </div>
      </form>

      {/* //mobile device */}
      <form className=" block lg:hidden md:hidden h-[100vh] ">
        <div>
          {/* <img
            className="w-[124px]  mx-auto mt-28"
            src={contactImg}
            alt="logo-of-site"
          /> */}
        </div>
        <div className="max-w-md contact-content ">
          {/* <h3>How to get in contact </h3> */}
          <div className="text-left content ">
            {/* <label className="" htmlFor="name">
              Drop us an email
            </label>
            <input
              className="form-input border border-gray-400 rounded w-full py-2 px-3 "
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />

            <label className=" text-gray-700 font-bold mb-2" htmlFor="name">
              Give us a call
            </label>
            <input
              className="form-input border border-gray-400 rounded w-full py-2 px-3"
              type="number"
              id="email"
              name="phone"
              placeholder="01705099380"
            /> */}
            <div className=" text-left mt-24">
              <h1 className="contact-part text-center mt-0">Pitch Us </h1>
              <p className="contact-part-p text-center p-6 my-6">
                Bring your ideas and stories to us and make it happen Send us
                your ideas or stories(Logline-Synopsis or Script) by mail along
                with your CV
              </p>
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
            <p className="link link-hover font-bold mt-12  text-left lg:text-xl md:text-xl text-lg">
              Follow Us On
            </p>
            <div className="flex items-center justify-between">
              <p className="link link-hover text-xl my-3 mx-2">
                <Link
                  to="https://www.facebook.com/filmmonksarthouse"
                  target="_blank"
                >
                  {" "}
                  <BsFacebook />
                </Link>
              </p>
              <p className="link link-hover text-xl my-3 mx-2">
                <Link
                  to="https://www.instagram.com/filmmonksarthouse/"
                  target="_blank"
                >
                  {" "}
                  <BsInstagram />
                </Link>
              </p>
              <p className="link link-hover text-xl my-3 mx-2">
                <Link to="https://www.youtube.com/@filmmonks" target="_blank">
                  {" "}
                  <BsYoutube />
                </Link>
              </p>
              <p className="link link-hover text-xl my-3 mx-2">
                <Link
                  to="https://www.linkedin.com/company/91148823/admin"
                  target="_blank"
                >
                  {" "}
                  <BsLinkedin />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </ContactWrapper>
  );
}

export const ContactWrapper = styled.div`
  background: #0f100b;

  .banner-img {
    // display: none;
  }
  nav {
    display: none;
  }
  .contact-part {
    width: 175px;
    height: 48px;
    left: 882px;
    top: 162px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 30px;
    color: #fff8f8;
    @media screen and (max-width: 440px) {
      width: 80px;
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 0px;
      // margin-left: auto;
      // margin-right: auto;
    }
  }
  .contact-part-p {
    width: 650px;

    left: 628px;
    top: 240px;

    margin-left: auto;
    margin-right: auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: justify;
    border: 1px solid white;
    border-bottom: 10px solid white;
    border-radius: 3px 24px 3px 24px;
    color: #f45558;

    @media screen and (max-width: 440px) {
      margin-top: 0px;
      width: 240px;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }
  }
  .contact-content h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 38px;
    line-height: 15px;
    margin-bottom: 40px;
    color: #fff8f8;
    text-align: left;
    @media screen and (max-width: 440px) {
      width: 200px;
      font-size: 18px;
      line-height: 22px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .contact-content > div > label {
    width: 158px;
    height: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #fff8f8;

    @media screen and (max-width: 440px) {
      width: 149px;
      font-size: 16px;
      line-height: 19px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .contact-content > div > input {
    margin-top: 22px;
    margin-bottom: 30px;
  }
  .content {
    width: 235px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default Contact;
