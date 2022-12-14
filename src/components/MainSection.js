import FlatUiColor from "./FlatUiColor/FlatUiColor";
import BoxShadow from "./BoxShadow/BoxShadow";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuSidebarAtom, toolsSidebarAtom } from "../atoms/TrigerSidebarsAtom";
import ToolsSidebar from "./ToolsSidebar";
import ColorShade from "./ColorShade/ColorShade";
import Wavy from "./Wavy/Wavy";
import Home from "./Home/Home";

const MainSection = () => {
  const [toolsSidebar] = useRecoilState(toolsSidebarAtom);
  const [menuSidebar] = useRecoilState(menuSidebarAtom);

  return (
    <div className="flex h-[87vh] overflow-hidden">
      <section
        className={`${menuSidebar ? "ml-[130px]" : " "} ${
          toolsSidebar ? "mr-[300px]" : ""
        }  transition-all w-[100%] dark-bg-secendery`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flat-ui-color" element={<FlatUiColor />} />
          <Route path="/box-shadow-generator" element={<BoxShadow />} />
          <Route path="/color-shade" element={<ColorShade />} />
          <Route path="/wavy" element={<Wavy />} />
        </Routes>
      </section>
      <ToolsSidebar />
    </div>
  );
};

export default MainSection;
