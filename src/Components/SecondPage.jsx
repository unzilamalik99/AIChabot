import React from "react";

const SecondPage = () => {
  return (
    <>
      <div
        id="SecondPage"
        className="flex flex-col h-screen  float-right px-10 md:w-[1000px] text-justify  overflow:hidden"
      >
        <div className=" md:border md:pb-5  solid p-4 border-gray-200  md:mt-5 mt-10 ">
          <p className="font-bold">Send Transactions</p>
          <p>
            Swap tokens, send transactions, interact with protocols, and much
            more.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  md:pl-[300px] md:gap-5 ">
          <div className="pt-5">
            <p className="rounded-xl border solid w-full  border-gray-200 md:py-5 py-3 text-center px-10 md:px-20 ">
              Comming Soon
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondPage;
