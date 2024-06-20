import React, { useState } from "react";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

function AccordionItems({ items }) {
  const [open, setOpen] = useState("");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <div className="sidebar">
      <h1>
        ReactStrap <br /> Sidebar
      </h1>
      <h4>Dummy Heading</h4>
      <Accordion open={open} toggle={toggle}>
        {items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id}>
              {" "}
              {item.icon}
              {item.title}
            </AccordionHeader>
            <AccordionBody accordionId={item.id}>
              {item.subtitles.map((subitem, index) => (
                <p className="subitem" key={index}>
                  {subitem}
                </p>
              ))}
            </AccordionBody>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default AccordionItems;
