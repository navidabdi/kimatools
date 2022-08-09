import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { menuSidebarAtom } from "../atoms/TrigerSidebarsAtom";
const MenuSidebar = () => {
  const [menuSidebar] = useRecoilState(menuSidebarAtom);

  return (
    <aside
      className={`${
        menuSidebar ? "hidden" : ""
      } col-span-1 bg-white border-r border-indigo-100 dark-bg-primary dark-border-primary`}
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
      </ul>
    </aside>
  );
};

export default MenuSidebar;
