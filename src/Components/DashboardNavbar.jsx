import React from "react";
import logo from '../assets/img/logo.png'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';

export default function DashboardNavbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow bg-white") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className={
                (props.transparent ? "text-black" : "text-gray-800") +
                " text-sm font-bold leading-relaxed flex flex-row items-center mr-4 py-2 whitespace-no-wrap"
              }
              href="/"
            >
              <img src={logo} alt="logo" className="mr-2 w-14"/>
              <p>DesignWorx</p>
            </a>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <MenuIcon className={(props.transparent ? "text-white" : "text-gray-800") }/>              
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
           
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="flex items-center">
                <Link to='/edithomepage'
                  className={
                    (props.transparent
                      ? "lg:text-black lg:hover:text-gray-900 text-black"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }>
                  Edit Home Page
                </Link>
              </li>

              <li className="flex items-center">
                <Link to='/eitservicespage'
                  className={
                    (props.transparent
                      ? "lg:text-black lg:hover:text-gray-900 text-black"
                      : "text-gray-800 hover:text-gray-600") +
                    " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  }>
                  Edit Services Page
                </Link>
              </li>

              <li className="flex items-center">
                <Link to='/contact'
                  className={
                    (props.transparent
                      ? "bg-red-600 text-white active:bg-gray-100"
                      : "bg-white border-2 border-red-600 rounded text-red-600 hover:bg-red-600 hover:text-white active:bg-pink-600") +
                    " text-xs font-bold uppercase px-4 py-2 rounded-sm lg:mr-1 cursor-pointer lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease" }}
                >
                 Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
