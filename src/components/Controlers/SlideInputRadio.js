import { useState } from "react";

const SlideInputRadio = () => {
  const args = ["lab", "hsl", "lch", "lrgb"];

  const [shadeMode, setShadeMode] = useState("hsl");

  return (
    <div className="bg-third flex relative p-1 justify-between items-center h-16 rounded-xl">
      {args.map((arg, index) => (
        <div
          key={arg}
          className="h-full flex items-center justify-center flex-1"
        >
          <input
            type="radio"
            id={arg}
            name="tabs"
            className="peer hidden"
            value={arg}
            checked={arg === shadeMode}
            onChange={(e) => setShadeMode(e.target.value)}
          />

          <label
            className="cursor-pointer transition text-lg font-semibold peer-checked:text-secondery text-primary w-full h-full justify-center items-center flex peer-checked:bg-primary rounded-xl"
            htmlFor={arg}
          >
            {arg}
          </label>
        </div>
      ))}
    </div>
  );
};

export default SlideInputRadio;
