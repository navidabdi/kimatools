import { useRecoilState, useSetRecoilState } from "recoil";
import {
  copyTrigerAtom,
  menuTrigerAtom,
  soundTrigerAtom,
} from "../../../atoms/FlatUiColor";
import "./color.css";

const Color = ({ color, setCopyTheColor, playSound }) => {
  const setCopyTriger = useSetRecoilState(copyTrigerAtom);
  const [soundTriger] = useRecoilState(soundTrigerAtom);
  const setMenuTriger = useSetRecoilState(menuTrigerAtom);
  return (
    <>
      <div
        onClick={() => {
          setCopyTheColor(color.hex);
          setCopyTriger(true);
          navigator.clipboard.writeText(color.hex);
          setMenuTriger(false);
          if (soundTriger) playSound();
          setTimeout(() => {
            setCopyTriger(false);
          }, 1000);
        }}
        className="color"
        style={{ backgroundColor: color.hex }}
      >
        <p className="color__name">{color.name}</p>
      </div>
    </>
  );
};

export default Color;
