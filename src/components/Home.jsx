import React from "react";
//import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import webdev from "../assets/webdev.png"
import SocMediaLinks2 from "./SocMediaLinks1";


const Home = () => {
  return (
      <div
        name="home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-between h-full px-4 md:flex-row">
          <div className="flex flex-col justify-center h-full">
            <p className="text-gray-500 text-2xl py-4 max-w-md">Hi, I'm</p>
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Joemon V
            </h2>
            <h2 className="text-4xl sm:text-7xl  text-white">
              Velassery
            </h2>
            <p className="text-gray-500 text-lg py-4 max-w-md md:text-2xl">FULL STACK DEVELOPER 👨‍💻</p>

            <div className="flex">
              <Link
                to="projects"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r
                from-cyan-500 to-blue-500 cursor-pointer hover:scale-105 duration-500"
              >
                Projects
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
              <div className="py-4 px-8">
                <SocMediaLinks2 />
                </div>
              
            </div>
          </div>

          <div>
            <img
              src={webdev}
              alt="my profile"
              className="h-72 md:h-96"
            />
          </div>
        </div>

      </div>

  );
};

export default Home;