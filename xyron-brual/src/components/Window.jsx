import React from "react";

export const Window = ({ children }) => {
  return (
    <div className="h-fit w-fit rounded-xl bg-[#1e1e1e] p-5 pt-0 shadow-lg shadow-[#6565655a] border-t-[32px] border-[#3c3c3c]">
        <WindowButtons />
      {children}
    </div>
  );
};

const WindowButtons = () => {
  return <div className="flex flex-row -mt-6 mb-5">
    <div className="rounded-full shadow-sm shadow-black bg-[#e54f43] w-4 h-4 mr-2"></div>
    <div className="rounded-full shadow-sm shadow-black bg-[#daaf28] w-4 h-4 mr-2"></div>
    <div className="rounded-full shadow-sm shadow-black bg-[#4cae27] w-4 h-4 mr-2"></div>
  </div>;
};
