import chroma from "chroma-js";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { soundTrigerAtom, copyTrigerAtom } from "../../atoms/FlatUiColor";
import CopyColor from "../FlatUiColor/CopyColor/CopyColor";
import sound from "../../assets/audio/audio.m4a";

const ColorShade = () => {
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [soundTriger] = useRecoilState(soundTrigerAtom);

  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const colorNum = 20;
  const heightHandler = 87 / colorNum + "vh";
  const checkLuminance = (color) => {
    if (chroma(color).luminance() > 0.5) {
      return "#000";
    } else {
      return "#fff";
    }
  };

  const colors = chroma.scale(["yellow", "navy"]).mode("hsl").colors(colorNum);
  return (
    <>
      <div className="grid overflow-hidden">
        {colors.map((color) => (
          <div
            key={color}
            className={`flex items-center justify-center font-semibold cursor-pointer transition-[transform] hover:scale-95`}
            style={{
              backgroundColor: color,
              height: heightHandler,
              color: checkLuminance(color),
            }}
            onClick={() => {
              setCopyTheColor(color);
              setCopyTriger(true);
              navigator.clipboard.writeText(color);

              if (soundTriger) playSound();
              setTimeout(() => {
                setCopyTriger(false);
              }, 1000);
            }}
          >
            {color}
            {console.log(checkLuminance(color))}
          </div>
        ))}
      </div>
      <CopyColor
        copyTheColor={copyTheColor}
        copyTriger={copyTriger}
        setCopyTriger={setCopyTriger}
      />
    </>
  );
};

export default ColorShade;
