import FlatUiColor from "./FlatUiColor/FlatUiColor";
import BoxShadow from "./BoxShadow/BoxShadow";

import { Routes, Route } from "react-router-dom";
const MainSection = () => {
  return (
    <>
      <section className="min-w-[83%]">
        <Routes>
          <Route path="/" element={<FlatUiColor />} />
          <Route path="/flat-ui-color" element={<FlatUiColor />} />
          <Route path="/box-shadow-generator" element={<BoxShadow />} />
        </Routes>
      </section>
    </>
  );
};

export default MainSection;
