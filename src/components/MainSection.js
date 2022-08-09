import FlatUiColor from "./FlatUiColor/FlatUiColor";
import BoxShadow from "./BoxShadow/BoxShadow";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import { toolsSidebarAtom } from "../atoms/TrigerSidebarsAtom";

const MainSection = () => {
  const [toolsSidebar] = useRecoilState(toolsSidebarAtom);

  return (
    <section
      className={`${
        toolsSidebar ? "min-w-full" : "min-w-[78%]"
      } transition-all`}
    >
      <Routes>
        <Route path="/" element={<FlatUiColor />} />
        <Route path="/flat-ui-color" element={<FlatUiColor />} />
        <Route path="/box-shadow-generator" element={<BoxShadow />} />
      </Routes>
    </section>
  );
};

export default MainSection;
