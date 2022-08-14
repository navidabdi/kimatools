import React from "react";
import { useRecoilState } from "recoil";
import {
  colorShadeOneAtom,
  colorShadeTwoAtom,
} from "../../atoms/ColorShadeAtom";
import { Accordion } from "../../Layouts";
import { ColorPicker } from "../Controlers";

const ColorShadeTools = () => {
  const [colorShadeOne, setColorShadeOne] = useRecoilState(colorShadeOneAtom);
  const [colorShadeTwo, setColorShadeTwo] = useRecoilState(colorShadeTwoAtom);

  const presetColors = [
    "rgba(154, 205, 50,0.9)",
    "rgba(54, 155, 50, 0.9)",
    "rgba(154, 205, 255, 0.9)",
    "rgba(25, 38, 255, 0.7)",
    "rgba(1, 147, 255, 0.9)",
    "rgba(255, 15, 255, 1)",
    "rgba(200, 5, 200, 1)",
    "rgba(255, 200, 12, 0.9)",
    "rgba(200, 205, 255, 0.9)",
    "rgba(180, 205, 145, 0.9)",
  ];

  return (
    <>
      <Accordion
        title="Colors"
        content={[
          <ColorPicker
            title="Color One"
            color={colorShadeOne}
            setColor={setColorShadeOne}
            presetColors={presetColors}
          />,
          <ColorPicker
            title="Color Two"
            color={colorShadeOne}
            setColor={colorShadeTwo}
            presetColors={setColorShadeTwo}
          />,
        ]}
      />
    </>
  );
};

export default ColorShadeTools;
