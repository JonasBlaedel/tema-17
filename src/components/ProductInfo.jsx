import Time from "./Time";
import ButtonBuy from "./ButtonBuy";
import Cart from "./Cart";
import "../../src/style.css";
import "../../src/product.css";
import React, { useState } from "react";

function ProductInfo({ product }) {
  const [value, setValue] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [active, setActive] = useState("10:00");
  const [tickets, setTickets] = useState();

  let newTicket = {
    date: product.date,
    month: product.month,
    location: product.location,
    quantity: value + 1,
    store: product.store,
    price: product.price,
    active: active,
    city: product.city,
  };

  const cartData = () => {
    setTickets(newTicket);

    const existingTickets = JSON.parse(localStorage.getItem("tickets")) || [];
    const updatedTickets = [newTicket, ...existingTickets];

    localStorage.setItem("tickets", JSON.stringify(updatedTickets));

    setShowCart(!showCart);
  };

  //   const tickets = [
  //     {
  //       date: product.date,
  //       month: product.month,
  //       city: product.city,
  //       quantity: totalValue,
  //       store: product.store,
  //       price: product.price,
  //       active: active,
  //     },
  //   ];

  return (
    <section className="productContainer">
      <Cart tickets={tickets} showCart={showCart} setShowCart={setShowCart} />
      <div className="productInfo">
        <img className="img_tumletid" src="/img/product.webp" alt="Product Image" />
        <div className="form">
          <div className="title">
            <h2>bObles Tumletid</h2>
            <h2>{`${product.date}. ${product.month}`}</h2>
          </div>
          <div className="location">
            <h3>{product.city}</h3>
            <h3>{`${product.price} kr`}</h3>
            <div className="store">
              <p>{product.store}</p>
              <p>{product.address}</p>
              <p>{product.city}</p>
            </div>
            <p>Vælg tidspunkt:</p>
            {/* Assuming <Time /> is a valid component */}
            <Time active={active} setActive={setActive} client:load />
            <div className="buyTT">
              <div className="counter">
                <button className="count" type="button" onClick={() => setValue(value > 0 ? value - 1 : 0)}>
                  -
                </button>
                <input type="number" id="numberInput" readOnly value={value + 1} />
                <button className="count" type="button" onClick={() => setValue(value + 1)}>
                  +
                </button>
              </div>
              <button type="button" className="buy" onClick={cartData}>
                Tilføj til kurv
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="info">
        <p>Bliv guidet igennem 1 times sjov tumlesession på bObles’ børnevenlige tumlemøbler og lær om designet og de mange funktioner.</p>

        <p>
          Sammen leger vi os til en bedre forståelse for, hvordan vi kan stimulere og udfordre vores børns motorik. Vi ruller, kravler, står, går, hopper, samt balancerer os til en glad krop. Du får også mulighed for at stille lige de spørgsmål om
          bObles, som du har lyst til, til vores dygtige elefantfører.
        </p>

        <p>Tilmelding er først til mølle. Pris: 299 kr. Med i prisen er en goodiebag inkl. bObles boldsæt, 1 Bibs sut, Derma Diaper Change lotion og Sebra kop og skål (i alt værdi 500,-)</p>
      </div>
    </section>
  );
}

export default ProductInfo;
