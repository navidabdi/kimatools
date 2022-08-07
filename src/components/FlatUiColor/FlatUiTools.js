import React from "react";
import { useRecoilState } from "recoil";
import { chooseColorPaletteAtom } from "../../atoms/FlatUiColor";
import { ColorPaletteNames } from "../../api/FlatUiColor";

const FlatUiTools = () => {
  const [chooseColorPalette, setChooseColorPalette] = useRecoilState(
    chooseColorPaletteAtom,
  );

  return (
    <nav>
      <ul>
        {ColorPaletteNames.map((palette) => (
          <li
            onClick={() => {
              setChooseColorPalette(palette.id);
            }}
            key={palette.id}
            className={` py-3 px-10 cursor-pointer hover:bg-blue-50 transition-all ${
              palette.id === chooseColorPalette
                ? " bg-blue-600 text-white hover:text-inherit"
                : ""
            }`}
          >
            <span>{palette.englishName}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FlatUiTools;
