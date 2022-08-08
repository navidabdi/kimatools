import { atom } from "recoil";

// Width Atoms
export const valueWidthAtom = atom({
  key: "valueWidthAtom",
  default: 450,
});
// Height Atoms
export const valueHeightAtom = atom({
  key: "valueHeightAtom",
  default: 450,
});
// Border radius Atoms
export const borderRadiustAtom = atom({
  key: "borderRadiustAtom",
  default: 50,
});
// Horizontal offset Atoms
export const horizontalOffsetAtom = atom({
  key: "horizontalOffsetAtom",
  default: 0,
});
// Vertical offset Atoms
export const verticalOffsetAtom = atom({
  key: "verticalOffsetAtom",
  default: 10,
});
// Blur radius Atoms
export const blurRadiusAtom = atom({
  key: "blurRadiusAtom",
  default: 15,
});
// Spread radius Atoms
export const spreadRadiusAtom = atom({
  key: "spreadRadiusAtom",
  default: -3,
});
