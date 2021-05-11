import React from "react";
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import twitter from '../assets/img/twitter.svg'
import logo from '../assets/img/logo.png'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-black pt-8 pb-6">
        {/* <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px", transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-black fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div> */}
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-red-600 font-semibold">
                <img src={logo} alt="logo" className="w-24"/>
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-300">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="flex fab fa-twitter">
                    <img src={twitter} alt="twitter"/>
                  </i>
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square">
                    <img src={instagram} alt="instagram"/>
                  </i>
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button"
                >
                  <i className="flex fab fa-dribbble">
                    <img src={facebook} alt="facebook"/>
                  </i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link to='/about' className="text-gray-400 hover:text-gray-700 font-semibold block pb-2 text-sm">About Us
                      </Link>
                    </li>
                    <li>
                      <Link to='/contact' className="text-gray-400 hover:text-gray-700 font-semibold block pb-2 text-sm">Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link to='/services' className="text-gray-400 hover:text-gray-700 font-semibold block pb-2 text-sm">Our Services
                      </Link>
                    </li>

                  </ul>
                </div>
               
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}DesignWorks{" "}
                <a
                  href="https://www.devbako.co.zw"
                  className="text-gray-600 hover:text-gray-900"
                >
                  By Tatenda Bako
                </a>.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
