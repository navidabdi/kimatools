import React, { useCallback, useRef, useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";

import useClickOutside from "../../utils/useClickOutside";

const ColorPicker = ({ title, color, setColor, presetColors }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="relative py-2 first:pt-0">
      <h4 className="mb-1 dark-text-primary">{title}</h4>
      <div className="flex items-center justify-between">
        <div
          className="swatch w-8 h-8 rounded-md cursor-pointer"
          style={{ backgroundColor: color }}
          onClick={() => toggle(true)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="bg-indigo-50 h-8 rounded-md px-3 tracking-wide flex-grow ml-2 dark-bg-secendery dark-text-secendery"
        />
      </div>

      {isOpen && (
        <div
          className="popover border-2 border-primary dark-border-primary bg-white dark-bg-primary"
          ref={popover}
        >
          <RgbaStringColorPicker color={color} onChange={setColor} />
          <div className="color-palette p-3 grid overflow-hidden grid-cols-5 auto-rows-fr">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                className="w-6 h-6 m-1 rounded-md cursor-pointer"
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
