import FlatUiTools from "../components/FlatUiColor/FlatUiTools";
import { Routes, Route } from "react-router-dom";
import BoxShadowTools from "./BoxShadow/BoxShadowTools";
const ToolsSidebar = () => {
  return (
    <aside className="min-w-[17%]">
      <Routes>
        <Route path="/" element={<FlatUiTools />} />
        <Route path="/flat-ui-color" element={<FlatUiTools />} />
        <Route path="/box-shadow-generator" element={<BoxShadowTools />} />
      </Routes>
    </aside>
  );
};

export default ToolsSidebar;
