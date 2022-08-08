import { useEffect, useState, useRef } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

const Accordion = ({ title, content }) => {
  const [isActiveAccordion, setIsActiveAccordion] = useState(false);
  const [divHeight, setDivHeight] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   setDivHeight(ref.current.clientHeight);
  //   console.log("height: ", ref.current.clientHeight);
  // }, []);
  return (
    <div key={title} className="border-b-2 border-blue-50">
      <div className="flex items-center justify-between p-4 bg-[#fff] z-10">
        <h4 className="">{title}</h4>
        <button
          onClick={() => setIsActiveAccordion(!isActiveAccordion)}
          className="w-7 h-7 bg-blue-100 flex justify-center items-center rounded-full"
        >
          <ChevronUpIcon
            className={`w-4 h-4 transition-all duration-500 ${
              isActiveAccordion ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        ref={ref}
        className={`p-4 transition-all duration-1000 relative z-0
          ${
            isActiveAccordion
              ? `translate-y-[-110%] opacity-0 pointer-events-none`
              : "translate-y-0 mt-0 opacity-100 pointer-events-auto"
          }
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
