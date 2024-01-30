import React from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";

const Side = () => {
  return (
    <>
      <div
        className={`fixed border solid border-gray-300 left-0 top-0 bottom-0 w-[200px] md:w-80 pt-10 bg-slate-100 text-black ${
          open ? "invisible" : "visible"
        } md:visible`}
      >
        {/* ==== Item  */}
        <div className="flex flex-col px-3">
          <Link target="_blank" className="flex items-center md:px-7">
            <h1 className="font-bold text-sky-700 text-2xl pr-3 ">MYChatbot</h1>
            <button className="rounded-xl py-2 px-7 bg-sky-700 text-white">
              beta
            </button>
          </Link>

          <ul className="flex items-center flex-col pt-20">
            <li className="pb-3">
              <Link to="/FrontContent" className="hover:text-blue-500 flex-row">
                <p className="flex float-right gap-2">
                  {" "}
                  <FaHome className="/FrontContent" />
                  Homepage
                </p>
              </Link>
            </li>
            <li className="pb-3">
              <Link to="/chatbot" className="hover:text-blue-500 flex-row">
                <p className="flex float-right gap-2">
                  {" "}
                  <CiSearch className="text-xl text-sky-800 " />
                  Ask Chatbot
                </p>
              </Link>
            </li>{" "}
            <li className="pb-3">
              <Link to="/smain" className="hover:text-blue-500  flex-row px-7">
                <p className="flex float-right gap-3 ">
                  {" "}
                  <FaRegCreditCard className=" text-[#3b8528] " />
                  Send Transactions
                </p>
              </Link>
            </li>
          </ul>
        </div>
        {/* ===== theme */}
        <div></div>
      </div>
    </>
  );
};

export default Side;
