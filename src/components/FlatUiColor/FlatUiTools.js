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
            className={` py-3 px-10 dark-text-primary bg-hover hover:text-white ${
              palette.id === chooseColorPalette
                ? " bg-indigo-600 text-white dark:text-white"
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
