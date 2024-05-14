import react, { useState } from "react";
import "../../src/style.css";

function Time(props) {
  const [active, setActive] = useState("ten");

  return (
    <div className="time">
      <button
        className={` ${"ten" === active ? "chosen" : "transparent"} button`}
        onClick={() => {
          setActive("ten");
        }}
      >
        10:00
      </button>

      <button
        className={` ${"twelve" === active ? "chosen" : "transparent"} button`}
        onClick={() => {
          setActive("twelve");
        }}
      >
        12:00
      </button>
    </div>
  );
}
export default Time;
