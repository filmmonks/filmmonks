import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../Assets/Logo/logo.png";

const menuItem = [
  { _id: 1, menu: "Home", route: "#" },
  { _id: 2, menu: "About", route: "#about" },
  { _id: 3, menu: "Services", route: "#service" },
  { _id: 4, menu: "Works", route: "#work" },
  { _id: 5, menu: "Team", route: "#team" },
  { _id: 6, menu: "Monks Gallery", route: "#monks-gallery" },
];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      console.log(window.scrollY);
      if (window.scrollY >= 80) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  const handleMenuToggle = () => {
    setOpen(!open);
  };

  const handleContactClick = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={
          active
            ? "w-full fixed top-0 bg-black z-10"
            : "w-full fixed bg-black z-10"
        }
      >
        <div className="md:flex items-center justify-between lg:bg-transparent md:bg-transparent bg-black py-8 lg:px-16 md:px-10 px-7">
          <div className="text-2xl cursor-pointer flex items-center font-[Poppins] text-white">
            <span className="text-3xl text-indigo-600 mr-1 pt-2"></span>
            <img className="w-44" src={logo} alt="logo" />
          </div>

          <div
            onClick={handleMenuToggle}
            className="text-3xl absolute right-8 top-7 cursor-pointer md:hidden text-white"
          >
            {open ? <AiFillCloseCircle /> : <GiHamburgerMenu />}
          </div>

          <ul
            className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static lg:bg-transparent md:bg-transparent bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open ? "top-20 " : "top-[-490px]"
            }`}
          >
            {location.pathname === "/contact" ||
            location.pathname === "/article" ||
            location.pathname === "/monks-galary" ? (
              <>
                <li className="md:ml-8 w-20 lg:w-auto md:w-auto mr-auto lg:text-base  md:text-xs md:my-0 my-7">
                  <Link
                    className="hover:text-[#F45656]  text-white font-normal "
                    to="/home"
                    onClick={handleContactClick}
                  >
                    BACK TO HOME
                  </Link>
                </li>
              </>
            ) : (
              <>
                {menuItem.map((link) => (
                  <li
                    key={link._id}
                    className="md:ml-8 w-4 lg:w-auto md:w-auto mr-auto lg:text-[15px] md:text-xs uppercase md:my-0 my-7"
                  >
                    <a
                      style={{ color: "white", fontWeight: 400 }}
                      href={link.route}
                    >
                      {link.menu}
                    </a>
                  </li>
                ))}
              </>
            )}

            {location.pathname !== "/contact" && (
              <li className="md:ml-8 w-20 lg:w-auto md:w-auto mr-auto lg:text-base  md:text-xs md:my-0 my-7">
                <Link
                  className="text-[#F45656] font-normal"
                  to="/contact"
                  onClick={handleContactClick}
                >
                  CONTACT
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
