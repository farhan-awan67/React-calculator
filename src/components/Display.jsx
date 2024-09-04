import React from "react";

export default function Display({ displayVal }) {
  return (
    <input
      className="bg-transparent border-2 border-white text-white w-full px-1 py-2 rounded-lg outline-none text-[1.5rem]"
      type="text"
      value={displayVal}
      readOnly
    />
  );
}
