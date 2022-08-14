import FlatUiColor from "./FlatUiColor/FlatUiColor";
import BoxShadow from "./BoxShadow/BoxShadow";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuSidebarAtom, toolsSidebarAtom } from "../atoms/TrigerSidebarsAtom";
import ToolsSidebar from "./ToolsSidebar";
import ColorShade from "./ColorShade/ColorShade";

const MainSection = () => {
  const [toolsSidebar] = useRecoilState(toolsSidebarAtom);
  const [menuSidebar] = useRecoilState(menuSidebarAtom);

  return (
    <div className="flex h-[87vh]">
      <section
        className={`${menuSidebar ? "ml-[130px]" : " "} ${
          toolsSidebar ? "mr-[300px]" : ""
        }  transition-all w-[100%]`}
      >
        <Routes>
          <Route path="/" element={<FlatUiColor />} />
          <Route path="/flat-ui-color" element={<FlatUiColor />} />
          <Route path="/box-shadow-generator" element={<BoxShadow />} />
          <Route path="/color-full" element={<ColorShade />} />
        </Routes>
      </section>
      <ToolsSidebar />
    </div>
  );
};

export default MainSection;
