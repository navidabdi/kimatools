import { useState } from "react";
import "./accordion.scss";

const Accordion = ({ title, content }) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(false);

  return (
    <div
      className={`accordion 
          ${isActiveAccordion ? "open" : ""}
        `}
    >
      <div
        className="flex items-center justify-between"
        onClick={() => setIsActiveAccordion(!isActiveAccordion)}
      >
        <h4 className="text-sm">{title}</h4>
        <button className="w-7 h-7"></button>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Accordion;
