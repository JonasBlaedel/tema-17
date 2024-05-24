import { useState } from "react";
import "../style.css";
import "../../src/product.css";

function Cart({ tickets, showCart, setShowCart }) {
  const closeCart = () => {
    setShowCart(!showCart);
  };
  return showCart ? (
    <section className="cart">
      <div className="items">
        <button onClick={closeCart} className="close">
          &#10005;
        </button>
        <p className="p-small">Produkter tilføjet til kurven</p>
        {tickets &&
          tickets.map((ticket, index) => (
            <div className="item">
              <p>{`${ticket.quantity}x`}</p>
              <div>
                <p>{`bObles Tumletid i ${ticket.store} ${ticket.city}`}</p>
                <p>{`${ticket.date} ${ticket.month} kl. ${ticket.active}`}</p>
              </div>
              <p>{ticket.price * ticket.quantity} kr</p>
            </div>
          ))}

        <a href="" className="visitCart">
          Gå til kurven
        </a>
      </div>
    </section>
  ) : (
    <div className="hidden"></div>
  );
}

export default Cart;
