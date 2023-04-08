import React from "react";

export const Window = ({ children }) => {
  return (
    <div className="h-fit w-fit rounded-xl bg-[#151928] p-0 shadow-lg shadow-[#151928] border-2 border-t-0 border-[#22272d]">
      <div className="bg-[#171b22] m-0 p-2 w-full h-[32px] rounded-t-xl border-b-2 border-[#22272d]">
        <WindowButtons />
      </div>
      <div className="mx-5 mb-5">{children}</div>
    </div>
  );
};

const WindowButtons = () => {
  return (
    <div className="flex flex-row">
      <div className="rounded-full shadow-sm shadow-black bg-[#e54f43] w-4 h-4 mr-2"></div>
      <div className="rounded-full shadow-sm shadow-black bg-[#daaf28] w-4 h-4 mr-2"></div>
      <div className="rounded-full shadow-sm shadow-black bg-[#4cae27] w-4 h-4 mr-2"></div>
    </div>
  );
};
