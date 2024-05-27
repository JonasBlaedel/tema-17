import { useEffect, useState } from "react";
import ButtonFilter from "./ButtonFilter";

function Events(props) {
  const [area, setArea] = useState("");

  return (
    <div className="tickets" id="billetter">
      <div className="heading">
        <p>{props.subheader}</p>
        <h2>{props.header}</h2>
      </div>
      <div className="buttons">
        <ButtonFilter client:load btnRegion="sjaelland" name="Sjælland" setArea={setArea} area={area} />
        <ButtonFilter client:load btnRegion="fyn" name="Fyn" setArea={setArea} area={area} />
        <ButtonFilter client:load btnRegion="jylland" name="Jylland" setArea={setArea} area={area} />
      </div>
      <hr className="ticketsDevide" />
      {props.data
        .filter((filterRegion) => area === "" || filterRegion.region === area)
        .sort((a, b) => new Date(a.fulldate) - new Date(b.fulldate))
        .map((ticket) => (
          <div className="ticket" key={ticket.id}>
            <div className="date">
              <p className="p-large">{`${ticket.date}. ${ticket.month}`}</p>
              <p className="p-small">{ticket.time1}</p>
              <p className="p-small">{ticket.time2}</p>
            </div>
            <div className="location">
              <p className="p-large">{ticket.city}</p>
              <p className="p-small">{ticket.store}</p>
              <p className="p-small">{ticket.address}</p>
            </div>
            <a href={`products/${ticket.id}`} className="button">
              Find billetter
            </a>
          </div>
        ))}
    </div>
  );
}

export default Events;
