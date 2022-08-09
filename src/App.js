// Import components
import {
  Header,
  Footer,
  ToolsSidebar,
  MainSection,
  MenuSidebar,
} from "./components";

import { useRecoilState } from "recoil";
import { darkModeAtom } from "./atoms/DarkModeAtom";
import { menuSidebarAtom, toolsSidebarAtom } from "./atoms/TrigerSidebarsAtom";
const App = () => {
  const [darkMode] = useRecoilState(darkModeAtom);
  const [menuSidebar] = useRecoilState(menuSidebarAtom);
  const [toolsSidebar, setToolsSidebar] = useRecoilState(toolsSidebarAtom);

  const sidebarHandeler = (menuSidebar, toolsSidebar) => {
    if (menuSidebar && toolsSidebar) {
      return "grid-cols-12";
    }
    if (menuSidebar && !toolsSidebar) {
      return "col-span-10";
    }
    if (!menuSidebar && toolsSidebar) {
      return "col-span-11";
    }

    return "col-span-9";
  };

  return (
    <div
      className={`${
        darkMode ? "dark " : ""
      }grid grid-cols-10 grid-rows-1 dark-text-primary`}
    >
      <Header />
      <MenuSidebar />
      <section
        className={`${
          menuSidebar ? "col-span-10" : "col-span-9"
        } flex h-[87vh]`}
      >
        <MainSection />
        <ToolsSidebar />
      </section>
      <Footer />
    </div>
  );
};

export default App;
