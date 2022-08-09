import { atom } from "recoil";

// Menu Sidebar Atom
export const menuSidebarAtom = atom({
  key: "menuSidebarAtom",
  default: true,
});
// Tools Sidebar Atom
export const toolsSidebarAtom = atom({
  key: "toolsSidebarAtom",
  default: true,
});
// Export Popup Atom
export const exportPopupAtom = atom({
  key: "exportPopupAtom",
  default: false,
});
