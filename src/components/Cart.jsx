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

        <div className="item">
          <p>{`${tickets.quantity}x`}</p>
          <div>
            <p className="uppercase">{`bObles Tumletid i ${tickets.store} ${tickets.city}`}</p>
            <p className="uppercase">{`${tickets.date} ${tickets.month} kl. ${tickets.active}`}</p>
          </div>
          <p>{tickets.price * tickets.quantity} DKK</p>
        </div>

        <a href="/cart" className="visitCart">
          Gå til kurven
        </a>
      </div>
    </section>
  ) : (
    <div className="hidden"></div>
  );
}

export default Cart;
