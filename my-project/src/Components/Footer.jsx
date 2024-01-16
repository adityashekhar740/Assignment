import React from "react";

const Footer = () => {
  return (
    <div className="mt-[40px] w-[60%] ">
      <h1 className="pl-5 bg-gradient-to-r from-blue-900 to-blue-500 text-transparent bg-clip-text font-semibold text-[48px]">
        FAQ
      </h1>
      <div className="flex flex-col gap-8 pt-5 ">
        <div className="border-solid border-[1px] border-[#217EEC] px-[24px] py-[17px] rounded-xl font-semibold text-[16px] ">
          Can education flashcards be used for all age groups?
        </div>
        <div className="border-solid border-[1px] border-[#217EEC] px-[24px] py-[17px] rounded-xl font-semibold text-[16px]" >How do education flashcards work?</div>
        <div className="border-solid border-[1px] border-[#217EEC] px-[24px] py-[17px] rounded-xl font-semibold text-[16px]" >Can education flashcards be used for test preparation?</div>
      </div>
    </div>
  );
};

export default Footer;
