import React from "react";

export default function ButtonContainer({ onClick }) {
  const buttonTexts = [
    "+",
    "7",
    "8",
    "9",
    "-",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "/",
    "0",
    ".",
    "=",
    "C",
  ];

  return (
    <div className="mt-[.9em] w-full flex justify-between flex-wrap">
      {buttonTexts.map((buttonText) => {
        return (
          <button
            key={buttonText}
            onClick={(event) => onClick(event, buttonText)}
            className="active:bg-transparent border-none w-[75px] h-[75px] text-[2rem] m-1 text-center text-white bg-orange-400 py-2 px-4 rounded-full"
          >
            {buttonText}
          </button>
        );
      })}
    </div>
  );
}
