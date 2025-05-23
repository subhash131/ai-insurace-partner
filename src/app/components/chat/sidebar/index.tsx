import React from "react";

const Sidebar = () => {
  return (
    <div className="w-60 overflow-y-scroll hide-scrollbar px-2 border-r border-gray-200">
      <div className="w-full p-2 font-semibold">
        <h3>Chat</h3>
      </div>
      <button className="p-2 w-full bg-black rounded-full text-white text-sm cursor-pointer active:scale-95 transition-transform">
        + New Chat
      </button>
      {/* Recommendations */}
      <div className="w-full h-fit p-2">
        <h3 className="text-xs text-gray-400">Recommendations</h3>
        <div className="flex flex-col gap-3 py-2 text-sm">
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="size-6 rounded-full bg-[#EBF3FC] flex items-center justify-center text-[#75AFF1] pt-1">
              H
            </div>
            <p className="text-nowrap">Family Plans</p>
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="size-6 rounded-full bg-[#FDF1E3] flex items-center justify-center text-[#fea16b] pt-1">
              T
            </div>
            <p>Term Insurance</p>
          </button>
          <button className="flex items-center gap-2 cursor-pointer">
            <div className="size-6 rounded-full bg-[#ECEEFD] flex items-center justify-center text-[#9064EF] pt-1">
              V
            </div>
            <p>Vehicle Insurance</p>
          </button>
        </div>
      </div>
      <div className="w-full h-fit p-2 text-gray-600">
        <h3 className="text-xs text-gray-400">History</h3>
        <div className="flex flex-col text-sm py-2 gap-2">
          <button className="w-full text-start cursor-pointer">
            <p>Lorem ipsum, dolor sit!...</p>
          </button>
          <button className="w-full text-start cursor-pointer">
            <p>Lorem ipsum, dolor sit!...</p>
          </button>
          <button className="w-full text-start cursor-pointer">
            <p>Lorem ipsum, dolor sit!...</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
