// Import components
import { Header, Footer, ToolsSidebar, MainSection } from "./components";
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
            <Link to="/box-shadow-generator" className="block py-3">
              Box Shadow
            </Link>
          </li>
        </ul>
      </aside>
      <section className="col-span-9 flex h-[87vh]">
        <MainSection />
        <ToolsSidebar />
      </section>
      <Footer />
    </div>
  );
};

export default App;
