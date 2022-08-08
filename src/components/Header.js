import logo from "../assets/img/logo.png";
import logoDark from "../assets/img/logo-dark.png";
import DarkSwitch from "./DarkSwitch";

import { useRecoilState } from "recoil";
import { darkModeAtom } from "../atoms/DarkModeAtom";

const Header = () => {
  const [darkMode] = useRecoilState(darkModeAtom);
  return (
    <header className="col-start-1 col-end-11 px-6 bg-white border-b border-indigo-100 h-[8vh] dark-bg-primary dark-border-primary">
      <div className="flex justify-between items-center h-full">
        <h1 className="font-bold text-lg leading-[0] dark-text-secendery">
          WEBKIMA TOOLS
        </h1>
        <DarkSwitch />
        <a
          href="https://webkima.com/"
          target="_blank"
          className="block cursor-pointer"
        >
          <img
            className="w-[130px]"
            src={darkMode ? logoDark : logo}
            alt="webkima academy logo"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
