import React, { useCallback, useRef, useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";

import useClickOutside from "../../utils/useClickOutside";

const ColorPicker = ({ color, setColor, presetColors, onChange }) => {
  const popover = useRef();
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <div className="picker">
      <div
        className="swatch"
        style={{ backgroundColor: color }}
        onClick={() => toggle(true)}
      />

      {isOpen && (
        <div className="popover" ref={popover}>
          <RgbaStringColorPicker color={color} onChange={onChange} />
          <div className="color-palette p-3 grid overflow-hidden grid-cols-6 auto-rows-fr gap-2">
            {presetColors.map((color, index) => (
              <button
                key={color}
                onClick={() => setColor(color)}
                className="w-5 h-5 rounded-md cursor-pointer"
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
