import { RangeInput } from "../Controlers";
import {
  valueWidthAtom,
  valueHeightAtom,
  borderRadiustAtom,
  horizontalOffsetAtom,
  verticalOffsetAtom,
  blurRadiusAtom,
  spreadRadiusAtom,
  itemBgShadowAtom,
  mainBgShadowAtom,
} from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";

import React, { useState } from "react";
import ColorPicker from "../Controlers/ColorPicker";
import { Accordion } from "../../Layouts";
const BoxShadowTools = () => {
  const [valueWidth, setValueWidth] = useRecoilState(valueWidthAtom);
  const [valueHeigh, setValueHeigh] = useRecoilState(valueHeightAtom);
  const [borderRadius, setBorderRadius] = useRecoilState(borderRadiustAtom);
  const [horizontalOffset, setHorizontalOffsets] =
    useRecoilState(horizontalOffsetAtom);
  const [verticalOffset, setVerticalOffset] =
    useRecoilState(verticalOffsetAtom);
  const [blurRadius, setBlurRadius] = useRecoilState(blurRadiusAtom);
  const [spreadRadius, setSpreadRadius] = useRecoilState(spreadRadiusAtom);
  const [colorBox, setColorBox] = useRecoilState(itemBgShadowAtom);
  const [colorMain, setColorMain] = useRecoilState(mainBgShadowAtom);

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
    <div className="">
      <Accordion
        title="Box Var"
        content={[
          <RangeInput
            title="width"
            min={100}
            max={450}
            range={1}
            value={valueWidth}
            setValue={setValueWidth}
          />,
          <RangeInput
            title="height"
            min={100}
            max={450}
            range={1}
            value={valueHeigh}
            setValue={setValueHeigh}
          />,
          <RangeInput
            title="Border Radius"
            min={0}
            max={225}
            range={1}
            value={borderRadius}
            setValue={setBorderRadius}
          />,
        ]}
      />

      <Accordion
        title="Shadow Var"
        content={[
          <RangeInput
            title="Horizontal offset"
            min={-100}
            max={100}
            range={1}
            value={horizontalOffset}
            setValue={setHorizontalOffsets}
          />,
          <RangeInput
            title="Vertical offset"
            min={-100}
            max={100}
            range={1}
            value={verticalOffset}
            setValue={setVerticalOffset}
          />,
          <RangeInput
            title="Blur radius"
            min={0}
            max={100}
            range={1}
            value={blurRadius}
            setValue={setBlurRadius}
          />,
          <RangeInput
            title="Spread radius"
            min={-100}
            max={100}
            range={1}
            value={spreadRadius}
            setValue={setSpreadRadius}
          />,
        ]}
      />

      <Accordion
        title="Colors"
        content={[
          <ColorPicker
            color={colorBox}
            setColor={setColorBox}
            presetColors={presetColors}
          />,
          <ColorPicker
            color={colorMain}
            setColor={setColorMain}
            presetColors={presetColors}
          />,
        ]}
      />
    </div>
  );
};

export default BoxShadowTools;
