import React, { useState, useRef, useEffect } from "react";

export default function CalcBox() {

  const btns = [
    "+",
    "-",
    "/",
    "*",
    "c",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "0",
    "=",
  ];

  const [inpVal, setInpVal] = useState("");

  const resultVal = useRef();

  const handleClick = (e) => {
    const inp = e.target.textContent;
    if (inp === "=") {
      const result = eval(inpVal).toString();
      resultVal.current.textContent = result;
      setInpVal(result);
    } else if (inp === "c") {
      setInpVal((prev) => prev.substring(0, prev.length - 1));
    } else {
      if(inpVal.length === 0 && (inp === '0' || inp === "+" || inp === "-" || inp === "/" || inp === "*") ) return;  
      const prev = inpVal.charAt(inpVal.length - 1);
      if (inp === "+" || inp === "-" || inp === "/" || inp === "*") {
        if (!(prev === "+" || prev === "-" || prev === "/" || prev === "*")) {
          setInpVal((prev) => prev + inp);
        }
      } else setInpVal((prev) => prev + inp);
    }
  };

  useEffect(() => {
    if (typeof inpVal === "string") {
      const inp = inpVal.charAt(inpVal.length - 1);
      if (!(inp === "+" || inp === "-" || inp === "/" || inp === "*")) {
        const result = eval(inpVal);
        resultVal.current.textContent = result ? result.toString() : 0;
      }
    }
  }, [inpVal]);

  return (
    <div className="w-2/5 mt-20 mx-auto">
      <div className="flex flex-col bg-[#6B728E] p-6 space-y-2">
        <span className="text-3xl text-right ">
          {inpVal === "" ? 0 : inpVal}
        </span>
        <span className="text-xl text-right text-[#4b5064]" ref={resultVal}>
          0
        </span>
      </div>
      <div className="flex flex-wrap justify-center">
        {btns.map((x, i) => {
          return (
            <span
              key={i}
              onClick={handleClick}
              className={`${i < 5 ? "basis-1/5" : "basis-2/6"} ${x === 'c' && 'clear'} text-center text-2xl text-white cursor-pointer p-3 border border-[#474E68] bg-[#404258] hover:bg-[#6B728E]`}
            >
              {x}
            </span>
          );
        })}
      </div>
    </div>
  );
}
