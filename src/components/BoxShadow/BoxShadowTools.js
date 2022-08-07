import { useState } from "react";
import { RangeInput } from "../Controlers";

const BoxShadowTools = () => {
  const [minWith, setMinWith] = useState(100);
  const [maxWith, setMaxWith] = useState(450);
  const [rangeWith, setRangeWith] = useState(1);

  return (
    <div className="px-5 py-5">
      <RangeInput
        min={minWith}
        setMin={setMinWith}
        max={maxWith}
        setMax={setMaxWith}
        range={rangeWith}
        setRange={setRangeWith}
        title="width"
      />
    </div>
  );
};

export default BoxShadowTools;
