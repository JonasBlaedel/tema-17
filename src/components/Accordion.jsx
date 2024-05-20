import React, { useState } from "react";

function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items
        .sort((a, b) => new Date(a.id) - new Date(b.id))
        .map((item, index) => (
          <div key={index} className={`accordion-item ${activeIndex === index ? "active" : ""}`}>
            <div className="accordion-header p" onClick={() => toggleAccordion(index)}>
              <span>{item.heading}</span> <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && <div className="accordion-content p">{item.content}</div>}
          </div>
        ))}
    </div>
  );
}

export default Accordion;
