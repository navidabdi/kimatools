import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuSidebarAtom } from "../atoms/TrigerSidebarsAtom";
const MenuSidebar = () => {
  const [menuSidebar] = useRecoilState(menuSidebarAtom);

  return (
    <aside
      className={`${
        menuSidebar ? "translate-x-0" : "translate-x-[-100%]"
      } bg-white border-r border-indigo-100 dark-bg-primary dark-border-primary absolute left-0 w-[130px] min-h-[100vh] z-10 transition-all`}
    >
      <ul className="dark-text-primary">
        <li className="text-center duration-100 ease-in hover:bg-indigo-200 hover:dark-bg-secendery">
          <Link to="/flat-ui-color" className="block py-3">
            Flat UI Color
          </Link>
        </li>
        <li className="text-center duration-100 ease-in hover:bg-indigo-200 hover:dark-bg-secendery">
          <Link to="/box-shadow-generator" className="block py-3">
            Box Shadow
          </Link>
        </li>
        <li className="text-center duration-100 ease-in hover:bg-indigo-200 hover:dark-bg-secendery">
          <Link to="/color-full" className="block py-3">
            Color Full
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MenuSidebar;
