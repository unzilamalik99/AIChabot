import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom"; // Import for routing
import Side from "./Side";

const FrontContent = () => {
  return (
    <>
      <Side />

      <div className="  md:pt-20 pt-20 py-10 px-10 md:pl-60 float-right   md:flex md:flex-col grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-center md:text-4xl text-2xl font-bold mb-4">
          Chatbot made easy
        </p>
        <a className="text-center md:px-[180px]">
          Trade your favorite tokens instantly, interact with chatbot protocols,
          get market insights using our Chabot AI
        </a>
        {/* ////===== first card */}

        <div className="md:ml-40 bg-white rounded-lg text-center shadow-md p-4 md:w-[800px]  md:py-10 py-5  ">
          <Link to="/chatbot" className="block">
            <div>
              <div className="text-center">
                <h1 className="">
                  <button className="text-white text-xl bg-sky-800 rounded-xl py-2 px-3 ml-5">
                    <CiSearch className="" />
                  </button>{" "}
                  Ask Chatbot
                </h1>
              </div>
            </div>

            <p className="text-gray-700 text-center pt-5">
              Explore the chatbot ecosystem and find the resources that you
              need.
            </p>
          </Link>
        </div>

        {/* ////===== seocnd card */}
        <div className="md:ml-40 bg-white rounded-lg text-center shadow-md p-4 md:w-[800px]  md:py-10 py-5 ">
          <Link to="/Smain" className="block">
            {/* Use Link for navigation */}

            <div className="text-center ">
              <h1 className="">
                {" "}
                <button className="text-white text-xl bg-[#317915ea] rounded-xl py-2 px-3 ml-5">
                  <FaRegCreditCard className="" />
                </button>{" "}
                Send transactions
              </h1>
            </div>

            <p className="text-gray-700 text-center pt-5">
              Swap tokens, send transactions, interact with protocols, and much
              more.
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FrontContent;
