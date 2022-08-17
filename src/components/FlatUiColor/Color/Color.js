import { useRecoilState, useSetRecoilState } from "recoil";
import {
  copyTrigerAtom,
  menuTrigerAtom,
  soundTrigerAtom,
} from "../../../atoms/FlatUiColor";

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
        className="color relative cursor-pointer overflow-hidden z-0 transition-all ease-in-out duration-200 before:content-['Copy'] before:absolute before:text-white before:font-semibold before:px-6 before:py-2 before:rounded-md before:border before:border-white before:left-[50%] before:top-[50%]  before:translate-x-[-50%] before:translate-y-[200%] before:transition-all before:duration-150 before:ease-in-out before:opacity-0 hover:before:opacity-100 hover:before:translate-y-[-50%]"
        style={{ backgroundColor: color.hex }}
      >
        <p className="color__name absolute right-3 bottom-3 text-white opacity-90 uppercase">
          {color.name}
        </p>
      </div>
    </>
  );
};

export default Color;
