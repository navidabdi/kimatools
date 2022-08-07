// Import components
import { Header } from "./components";
import FlatUiColor from "./components/FlatUiColor/FlatUiColor";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-1">
      <Header />
      <aside className="col-span-1 bg-blue-50">
        <ul className="">
          <li className="text-center relative  duration-100 ease-in hover:bg-blue-200">
            <a href="#" className="block py-3">
              Flat UI Color
            </a>
          </li>
          <li className="text-center relative py-3 duration-100 ease-in hover:bg-blue-200">
            <a href="#" className="block">
              blob
            </a>
          </li>
        </ul>
      </aside>
      <Routes>
        <Route path="/" element={<FlatUiColor />} />
        <Route path="/flat-ui-color" element={<FlatUiColor />} />
      </Routes>
    </div>
  );
};

export default App;
