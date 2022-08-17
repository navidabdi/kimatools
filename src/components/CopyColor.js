import chroma from "chroma-js";
import React from "react";
import { useRecoilState } from "recoil";
import { copyTrigerAtom } from "../atoms/FlatUiColor/copyTrigerAtom";

const CopyColor = ({ copyTheColor }) => {
  const [copyTriger] = useRecoilState(copyTrigerAtom);
  const opacityVal = copyTriger ? 1 : 0;
  const scaleVal = copyTriger ? "scale(1)" : "scale(1.2)";

  const checkLuminance = (color) => {
    if (color)
      if (chroma(color).luminance() > 0.5) {
        return "#000";
      } else {
        return "#fff";
      }
  };

  return (
    <div
      className="copycolor fixed inset-0 flex items-center justify-center transition-opacity ease-in-out duration-300 z-50 pointer-events-none lefttoright"
      style={{
        backgroundColor: copyTheColor,
        opacity: opacityVal,
        color: checkLuminance(copyTheColor),
      }}
    >
      <div
        className="data w-full flex flex-col justify-center items-center transition-all duration-300 ease-in"
        style={{ transform: scaleVal }}
      >
        <h2
          className="text-[4rem] leading-[6rem] w-full text-center md:text-[7rem] md:leading-[10rem] bg-white/20"
          style={{ textShadow: `2px 2px ${copyTheColor}` }}
        >
          Coped!
        </h2>
        <p className="text-[3.5rem] drop-shadow mt-10 font-semibold">
          {copyTheColor}
        </p>
      </div>
    </div>
  );
};

export default CopyColor;
