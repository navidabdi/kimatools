import React from "react";
import { useRecoilState } from "recoil";
import { chooseColorPaletteAtom } from "../../../atoms/FlatUiColor";
import { ColorPaletteNames } from "../../../api/FlatUiColor";

const Header = () => {
  const [chooseColorPalette, setChooseColorPalette] = useRecoilState(
    chooseColorPaletteAtom,
  );

  return (
    <nav className="text-right min-w-[20%] ">
      <ul>
        {ColorPaletteNames.map((palette) => (
          <li
            onClick={() => {
              setChooseColorPalette(palette.id);
            }}
            key={palette.id}
            className={` py-3 px-4 cursor-pointer hover:bg-blue-50 transition-all ${
              palette.id === chooseColorPalette
                ? " bg-blue-600 text-white hover:text-inherit"
                : ""
            }`}
          >
            <span>{palette.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
