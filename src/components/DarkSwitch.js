import { SunIcon, MoonIcon } from "@heroicons/react/outline";
import { useRecoilState } from "recoil";
import { darkModeAtom } from "../atoms/DarkModeAtom";

const DarkSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);
  return (
    <div
      onClick={() => setDarkMode(!darkMode)}
      className="cursor-pointer bg-indigo-50 rounded-full flex h-10 w-10 justify-center items-center"
    >
      {darkMode ? (
        <SunIcon className="w-7 h-7" />
      ) : (
        <MoonIcon className="w-7 h-7" />
      )}
    </div>
  );
};

export default DarkSwitch;
