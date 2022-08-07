import { selector } from "recoil";
import { chooseColorPaletteAtom } from "./chooseColorPaletteAtom";
import {
  PaletteV1Data,
  AmericanPalette,
  AussiePalette,
  BritishPalette,
  CanadianPalette,
  ChinesePalette,
  DutchPalette,
  FrenchPalette,
  GermanPalette,
  IndianPalette,
  RussianPalette,
  SpanishPalette,
  IranianPalette,
  SwedishPalette,
  TurkishPalette,
} from "../../api/FlatUiColor";
export const colorPaletteSelector = selector({
  key: "colorPaletteSelector",
  get: ({ get }) => {
    const filter = get(chooseColorPaletteAtom);

    switch (filter) {
      case 0:
        return IranianPalette;
      case 1:
        return PaletteV1Data;
      case 2:
        return AmericanPalette;
      case 3:
        return AussiePalette;
      case 4:
        return BritishPalette;
      case 5:
        return CanadianPalette;
      case 6:
        return ChinesePalette;
      case 7:
        return DutchPalette;
      case 8:
        return FrenchPalette;
      case 9:
        return GermanPalette;
      case 10:
        return IndianPalette;
      case 11:
        return RussianPalette;
      case 12:
        return SpanishPalette;
      case 13:
        return SwedishPalette;
      case 14:
        return TurkishPalette;
      default:
        return PaletteV1Data;
    }
  },
});
