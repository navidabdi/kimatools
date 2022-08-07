import { atom } from "recoil";
import { PaletteV1Data } from "../../api/FlatUiColor/PaletteV1Data";

export const chooseColorPaletteAtom = atom({
  key: "chooseColorPaletteAtom",
  default: PaletteV1Data,
});
