import { atom } from "recoil";

// Width Atoms
export const minWidthAtom = atom({
  key: "minWidthAtom",
  default: 100,
});
export const maxWidthAtom = atom({
  key: "maxWidthAtom",
  default: 450,
});
export const rangeWidthAtom = atom({
  key: "rangeWidthAtom",
  default: 1,
});
export const valueWidthAtom = atom({
  key: "valueWidthAtom",
  default: 450,
});
