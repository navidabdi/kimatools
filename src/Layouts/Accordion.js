import { useState, useRef } from "react";
import { ChevronUpIcon } from "@heroicons/react/outline";

const Accordion = ({ title, content }) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(false);
  const ref = useRef(null);
  return (
    <div key={title} className="border-b-2 border-indigo-50 accordion">
      <div
        className="accordion-header flex items-center justify-between p-4 bg-[#fff] cursor-pointer"
        onClick={() => setIsActiveAccordion(!isActiveAccordion)}
      >
        <h4 className="">{title}</h4>
        <button className="w-7 h-7 bg-indigo-100 flex justify-center items-center rounded-full">
          <ChevronUpIcon
            className={`w-4 h-4 transition-all duration-500 ${
              isActiveAccordion ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        ref={ref}
        className={`accordion-content px-4 py-2 
          ${isActiveAccordion ? `` : "active"}
        `}
        style={
          isActiveAccordion
            ? { marginTop: `-${ref.current.clientHeight}px` }
            : { marginTop: `0` }
        }
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
