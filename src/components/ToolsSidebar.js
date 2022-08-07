import FlatUiTools from "../components/FlatUiColor/FlatUiTools";
import { Routes, Route } from "react-router-dom";
const ToolsSidebar = () => {
  return (
    <aside className="min-w-[17%]">
      <Routes>
        <Route path="/" element={<FlatUiTools />} />
        <Route path="/flat-ui-color" element={<FlatUiTools />} />
      </Routes>
    </aside>
  );
};

export default ToolsSidebar;
