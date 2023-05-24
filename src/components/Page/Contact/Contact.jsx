import React from "react";
import styled from "styled-components";
// import '../index.css';
import contactImg from "../../../Assets/Contact/FILM MONKS logo sign only png (1) 20.png";

import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";

function Contact() {
  return (
    <ContactWrapper className=" py-6">
      <h1 className="contact-part text-center">Pitch Us </h1>
      <p className="contact-part-p text-center">
        Bring your ideas and stories to us and make it happen Send us your ideas
        or stories(Logline-Synopsis or Script) by mail along with your CV
      </p>
      <form className=" lg:flex md:flex hidden justify-around items-center  ">
        <div className="max-w-md contact-content">
          <h3>How to get in contact </h3>
          <div className="text-left ">
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

            <div className="flex justify-evenly">
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
                <Link
                  to="https://www.youtube.com/channel/filmmonks"
                  target="_blank"
                >
                  {" "}
                  <BsYoutube />
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className="w-[482px] h-[512px]"
            src={contactImg}
            alt="logo-of-site"
          />
        </div>
      </form>
      <form className=" block lg:hidden md:hidden">
        <div>
          <img
            className="w-[124px] h-[154px] mx-auto mt-5"
            src={contactImg}
            alt="logo-of-site"
          />
        </div>
        <div className="max-w-md contact-content">
          <h3>How to get in contact </h3>
          <div className="text-left content ">
            <label className="" htmlFor="name">
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

            <div className="flex justify-evenly">
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
                <Link
                  to="https://www.youtube.com/channel/filmmonks"
                  target="_blank"
                >
                  {" "}
                  <BsYoutube />
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
    width: 162px;
    height: 48px;
    left: 882px;
    top: 162px;
    margin-left: auto;
    margin-right: auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 30px;
    color: #fff8f8;
    @media screen and (max-width: 440px) {
      font-size: 18px;
      line-height: 22px;
      margin-bottom: 0px;
    }
  }
  .contact-part-p {
    width: 671px;
    height: 72px;
    left: 628px;
    top: 240px;
    margin-left: auto;
    margin-right: auto;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;

    color: #f45558;

    @media screen and (max-width: 440px) {
      width: 305px;
      height: 70px;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
    }
  }
  .contact-content h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
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
