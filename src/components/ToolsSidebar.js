import FlatUiTools from "../components/FlatUiColor/FlatUiTools";
import { Routes, Route } from "react-router-dom";
import BoxShadowTools from "./BoxShadow/BoxShadowTools";
import { useRecoilState } from "recoil";
import { toolsSidebarAtom } from "../atoms/TrigerSidebarsAtom";
import ColorShadeTools from "./ColorShade/ColorShadeTools";
import WavyTools from "./Wavy/WavyTools";
import HomeTools from "./Home/HomeTools";

const ToolsSidebar = () => {
  const [toolsSidebar] = useRecoilState(toolsSidebarAtom);

  return (
    <aside
      className={`${
        toolsSidebar ? "translate-x-0" : "translate-x-[100%]"
      } min-w-[300px] scrollbar-thin bg-white border-l border-indigo-100 dark:bg-neutral-900 dark:border-neutral-600 transition-all  h-[87vh] absolute right-0`}
    >
      <Routes>
        <Route path="/" element={<HomeTools />} />
        <Route path="/flat-ui-color" element={<FlatUiTools />} />
        <Route path="/box-shadow-generator" element={<BoxShadowTools />} />
        <Route path="/color-shade" element={<ColorShadeTools />} />
        <Route path="/wavy" element={<WavyTools />} />
      </Routes>
    </aside>
  );
};

export default ToolsSidebar;
