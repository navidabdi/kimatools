import { useCallback, useEffect, useState } from "react";

import ColorRange from "./ColorRange";

import { gradientColorsAtom, gradientTempltates } from "../../atoms/Wavy";
import { useRecoilState } from "recoil";

const GradientPicker = () => {
  const [gradient, setGradientColors] = useRecoilState(gradientColorsAtom);
  const [currentColor, setCurrentColor] = useState(Object.keys(gradient)[0]);
  const [templates, setTemplates] = useState([gradient, ...gradientTempltates]);
  const [currentTemplate, setCurrentTemplate] = useState(0);

  const handleGradientChange = useCallback(
    (changedGradient) => {
      setGradientColors((prev) => {
        return { ...prev, ...changedGradient };
      });
    },
    [setGradientColors],
  );

  useEffect(() => {
    setTemplates((prev) => {
      prev[currentTemplate] = gradient;
      return prev;
    });
  }, [gradient, currentTemplate]);

  const handleColorSelect = (newColorValue) => {
    handleGradientChange(Object.fromEntries([[currentColor, newColorValue]]));
  };

  const handleTemplateSelect = (i) => {
    setCurrentTemplate(i);
    handleGradientChange(templates[i]);
  };

  return (
    <div className="w-full flex flex-col mt-4">
      <h4 className="flex-1 overflow-hidden font-semibold text-lg text-gray-400">
        Gradient
      </h4>
      <div className="flex items-center mt-3">
        <div className="flex flex-none mr-2">
          {Object.values(gradient).map((color, i) => {
            return (
              <div
                key={Object.keys(gradient)[i]}
                tabIndex="0"
                style={{ background: gradient[Object.keys(gradient)[i]] }}
                className={`w-8 h-8 mr-2 rounded-lg transition-all ring-4 ring-white cursor-pointer ${
                  currentColor === Object.keys(gradient)[i]
                    ? "ring-indigo-200 border-2 border-white"
                    : ""
                }`}
                onClick={(e) => setCurrentColor(Object.keys(gradient)[i])}
              ></div>
            );
          })}
        </div>
        <div className="flex flex-auto">
          <ColorRange handleColorSelect={handleColorSelect} />
        </div>
      </div>
      <div className="flex items-center mt-3 p-2 bg-gray-100 rounded-lg">
        <ul className="w-full flex justify-end">
          {templates.map((t, i) => {
            return (
              <li
                key={i}
                onClick={() => handleTemplateSelect(i)}
                style={{
                  background: `linear-gradient(to right, ${t.first} 5%, ${t.last} 95%)`,
                }}
                className={`w-8 h-8 rounded-lg mr-2 cursor-pointer ${
                  currentTemplate === i
                    ? "ring-4 ring-indigo-200 border-2 border-white"
                    : ""
                }`}
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default GradientPicker;
