// eslint-disable-next-line no-unused-vars
import React from "react";

const ChatGPTUI = () => {
  return (
    <div>
      <div className="text-start md:border md:pb-5 solid p-2 border-gray-200 md:mt-5">
        <p className="md:pt-2 font-bold text-2xl md:text-4xl md:px-5 md:text-center">
          Start your conversation below!
        </p>
        <p className="pt-5 md:text-xl md:px-5 md:text-center">
          Don't know where to start? Try one of these.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2   md:px-20 md:gap-5 ">
          <div className="pt-5">
            <p className="rounded-xl border solid w-full  border-gray-200 md:py-5 py-3 px-10 md:px-20 ">
              What is ChatGPT?
            </p>
          </div>
          <div className="pt-5">
            <p className="rounded-xl border solid w-full  border-gray-200 md:py-5 py-3 px-10 ">
              What is Cryptocurrency?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2   md:px-60 md:gap-5 ">
          <div className="pt-5">
            <p className="rounded-xl border solid w-full  border-gray-200 md:py-5 py-3 px-10  ">
              What is Data Science?
            </p>
          </div>
          <div className="pt-5">
            <p className="rounded-xl border solid w-full  border-gray-200 md:py-5 py-3 px-10 ">
              What is Web3?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGPTUI;
