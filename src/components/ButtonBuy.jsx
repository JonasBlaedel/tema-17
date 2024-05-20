import React, { useState } from "react";

function ButtonBuy() {
  const [value, setValue] = useState(null);

  return (
    <div className="buyTT">
      <div className="counter">
        <button
          className="count"
          type="button"
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
        <input className="" type="number" id="numberInput" readOnly value={value + 1} />
        <button
          className="count"
          type="button"
          onClick={() => {
            setValue(value > 0 ? value - 1 : 0);
          }}
        >
          -
        </button>
      </div>
      <button type="button " className=" buy">
        Køb nu
      </button>
    </div>
  );
}

export default ButtonBuy;
