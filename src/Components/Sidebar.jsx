import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="side-bar ">
        <div
          className={`fixed  z-[10] border solid border-gray-300 left-0 top-0 bottom-0 w-[310px] md:w-80 pt-10 bg-slate-100 text-black ${
            open ? "visible" : "invisible"
          }`}
        >
          {/* ==== Item  */}
          <div className="flex flex-col px-3">
            <a target="_blank" className="flex items-center px-4">
              <h1 className="font-bold text-sky-700 text-2xl pr-2 ">
                MyChatbot
              </h1>
              <button className="rounded-xl py-2 px-7 bg-sky-700 text-white">
                beta
              </button>
            </a>

            <ul className="flex items-center flex-col pt-20">
              <li className="pb-3">
                <Link
                  to="/FrontContent"
                  className="hover:text-blue-500 flex-row"
                >
                  <p className="flex float-right gap-2">
                    {" "}
                    <FaHome className="" />
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
                <Link
                  to="/smain"
                  className="hover:text-blue-500  flex-row px-7"
                >
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

        {/* Toggle button */}
        <button
          className="z-20 fixed top-4 right-4 md:hidden lg:hidden text-2xl text-sky-700 border border-solid border-gray-300 p-3 rounded-xl"
          onClick={() => setOpen(!open)} // Toggle the 'open' state
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}{" "}
          {/* Change the icon based on the 'open' state */}
        </button>
      </section>
    </>
  );
};

export default Sidebar;
