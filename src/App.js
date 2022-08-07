// Import components
import { Header, Footer } from "./components";
import FlatUiColor from "./components/FlatUiColor/FlatUiColor";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
const App = () => {
  return (
    <div className="grid grid-cols-10 grid-rows-1">
      <Header />
      <aside className="col-span-1 bg-blue-50">
        <ul className="">
          <li className="text-center duration-100 ease-in hover:bg-blue-200">
            <Link to="/flat-ui-color" className="block py-3">
              Flat UI Color
            </Link>
          </li>
          <li className="text-center duration-100 ease-in hover:bg-blue-200">
            <Link to="/test" className="block py-3">
              test
            </Link>
          </li>
        </ul>
      </aside>
      <section className="col-span-9 flex h-[87vh]">
        <Routes>
          <Route path="/" element={<FlatUiColor />} />
          <Route path="/flat-ui-color" element={<FlatUiColor />} />
        </Routes>
      </section>
      <Footer />
    </div>
  );
};

export default App;
