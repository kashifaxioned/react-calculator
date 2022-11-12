import React from "react";

export default function CalcBox() {
  const numArr = Array.from(Array(10).keys());

  const btns = [
    "+",
    "-",
    "/",
    "*",
    "c",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    ".",
    0,
    "=",
  ];


  return (
    <div className="w-2/5 mt-20 mx-auto">
      <div className="flex flex-col bg-[#6B728E] p-6 space-y-2">
        <form>
          <input className="text-3xl text-right w-full bg-inherit outline-none" type='text'/>
        </form>
        <span className="text-xl text-right">result</span>
      </div>
      <div className="flex flex-wrap justify-center">
        {btns.map((x, i) => {
          if (i < 5)
            return (
              <span className="basis-1/5 text-center text-2xl text-white cursor-pointer p-3 border border-[#474E68] bg-[#404258] hover:bg-[#6B728E]">
                {x}
              </span>
            );
          else
            return (
              <span className="basis-2/6 text-center text-2xl text-white cursor-pointer p-3 border border-[#474E68] bg-[#404258] hover:bg-[#6B728E]">
                {x}
              </span>
            );
        })}
        {/* <div className="flex justify-between">
          {controlsArr.map((x) => {
            return <span className="basis-1/4">{x}</span>;
          })}
        </div>
        <div className="flex flex-wrap">
          {numArr.map((x) => {
            return <span className="basis-1/4">{x}</span>;
          })}
        </div> */}
      </div>
    </div>
  );
}
