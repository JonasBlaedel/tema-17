import React, { useState } from "react";
// Brug form til samlede kurv på tværs af siden og brug set Tickets tilkurv på produktsiden
function ButtonBuy({ setTickets, date, month, location, setShowCart, store, price, dataPurchase }) {
  const [value, setValue] = useState(0);

  const handleBuyClick = () => {
    setTickets({ date, month, location, quantity: totalValue, store, price });
    setShowCart(true);
  };

  let totalValue = value + 1;

  return (
    <div className="buyTT">
      <div className="counter">
        <button className="count" type="button" onClick={() => setValue(value > 0 ? value - 1 : 0)}>
          -
        </button>
        <input className="" type="number" id="numberInput" readOnly value={totalValue} />
        <button className="count" type="button" onClick={() => setValue(value + 1)}>
          +
        </button>
      </div>
      <button type="button" className="buy" onClick={handleBuyClick}>
        Køb nu
      </button>
    </div>
  );
}

export default ButtonBuy;
