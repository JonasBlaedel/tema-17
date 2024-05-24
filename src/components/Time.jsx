import react, { useState } from "react";
import "../../src/style.css";

function Time({ active, setActive }) {
  return (
    <div className="time">
      <button
        className={` ${"10:00" === active ? "chosen" : "transparent"} button`}
        onClick={() => {
          setActive("10:00");
        }}
      >
        10:00
      </button>

      <button
        className={` ${"12:00" === active ? "chosen" : "transparent"} button`}
        onClick={() => {
          setActive("12:00");
        }}
      >
        12:00
      </button>
    </div>
  );
}
export default Time;
