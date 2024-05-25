import React, { useState, useEffect } from "react";

const CartItem = () => {
  const [tickets, setTickets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedTickets = JSON.parse(localStorage.getItem("tickets"));
    if (storedTickets) {
      setTickets(storedTickets);
      calcTotalPrice(storedTickets);
    }
  }, []);

  const calcTotalPrice = (tickets) => {
    const total = tickets.reduce((total, ticket) => total + ticket.price * ticket.quantity, 0);
    setTotalPrice(total);
  };

  const removeFromCart = (index) => {
    const updatedTickets = [...tickets];
    updatedTickets.splice(index, 1);
    setTickets(updatedTickets);
    localStorage.setItem("tickets", JSON.stringify(updatedTickets));
    calculateTotalPrice(updatedTickets);
  };

  const clearCart = () => {
    localStorage.removeItem("tickets");
    setTickets([]);
    setTotalPrice(0);
  };

  return (
    <section>
      {tickets.map((ticket, index) => (
        <div className="cart-item-details" key={index}>
          <div className="cart-item">
            <p>{`${ticket.quantity}x`}</p>
            <div>
              <p>{`bObles Tumletid i ${ticket.store} ${ticket.city}`}</p>
              <p>{`${ticket.date} ${ticket.month} kl. ${ticket.active}`}</p>
            </div>
            <p>{ticket.price * ticket.quantity} kr</p>
          </div>
          <button className="remove-button" onClick={() => removeFromCart(index)}>
            Fjern fra kurv
          </button>
        </div>
      ))}
      <p>Total: {totalPrice} kr</p>
      <button className="cart-button" onClick={clearCart}>
        Ryd Kurv
      </button>
      <button className="cart-button button-checkout">Gå til Checkout</button>
    </section>
  );
};

export default CartItem;
