import "./flatUiColor.css";
import { useState } from "react";
import { useRecoilState } from "recoil";
import sound from "../../assets/audio/audio.m4a";

import CopyColor from "./CopyColor/CopyColor";
import Color from "./Color/Color";
import SidebarTools from "./SidebarTools/SidebarTools";

import {
  colorPaletteSelector,
  copyTrigerAtom,
  menuTrigerAtom,
} from "../../atoms/FlatUiColor";
const FlatUiColor = () => {
  const [copyTheColor, setCopyTheColor] = useState(null);
  const [copyTriger, setCopyTriger] = useRecoilState(copyTrigerAtom);
  const [menuTriger] = useRecoilState(menuTrigerAtom);
  const [chooseColorPalette] = useRecoilState(colorPaletteSelector);
  const playSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <>
      <div className="color-container min-w-[83%]">
        {chooseColorPalette.map((color) => (
          <Color
            key={color.id}
            color={color}
            setCopyTheColor={setCopyTheColor}
            playSound={playSound}
          />
        ))}
        <CopyColor
          copyTheColor={copyTheColor}
          copyTriger={copyTriger}
          setCopyTriger={setCopyTriger}
        />
      </div>
      <SidebarTools />
      {/* <audio className="sound-pick" src="./assets/audio.m4a"></audio> */}
    </>
  );
};

export default FlatUiColor;