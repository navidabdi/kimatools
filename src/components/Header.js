import logo from "../assets/img/logo.png";
import logoDark from "../assets/img/logo-dark.png";
import DarkSwitch from "./DarkSwitch";
import { MenuIcon, MenuAlt1Icon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../atoms/DarkModeAtom";
import { Link } from "react-router-dom";
import { menuSidebarAtom, toolsSidebarAtom } from "../atoms/TrigerSidebarsAtom";
import MenuSidebar from "./MenuSidebar";

const Header = () => {
  const [darkMode] = useRecoilState(darkModeAtom);
  const [menuSidebar, setMenuSidebar] = useRecoilState(menuSidebarAtom);
  const [toolsSidebar, setToolsSidebar] = useRecoilState(toolsSidebarAtom);
  return (
    <>
      <header className="col-start-1 col-end-11 px-6 bg-white border-b border-indigo-100 h-[8vh] dark-bg-primary dark-border-primary">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center">
            <button
              className="cursor-pointer dark-text-secendery"
              onClick={() => setMenuSidebar(!menuSidebar)}
            >
              {menuSidebar ? (
                <MenuIcon className="w-6 h-6" />
              ) : (
                <MenuAlt1Icon className="w-6 h-6" />
              )}
            </button>

            <Link to="/">
              <h1 className="font-bold text-md ml-4 leading-[0] dark-text-secendery">
                WEBKIMA TOOLS
              </h1>
            </Link>
          </div>
          <DarkSwitch />
          <div className="flex justify-center items-center">
            <a
              href="https://webkima.com/"
              target="_blank"
              className="hidden md:block cursor-pointer mr-4"
            >
              <img
                className="w-[130px]"
                src={darkMode ? logoDark : logo}
                alt="webkima academy logo"
              />
            </a>
            <button
              className="cursor-pointer dark-text-secendery"
              onClick={() => setToolsSidebar(!toolsSidebar)}
            >
              {toolsSidebar ? (
                <MenuIcon className="w-6 h-6" />
              ) : (
                <MenuAlt1Icon className="w-6 h-6 rotate-180" />
              )}
            </button>
          </div>
        </div>
      </header>
      <MenuSidebar />
    </>
  );
};

export default Header;
