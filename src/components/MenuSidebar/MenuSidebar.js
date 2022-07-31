import './MenuSidebar.scss';
import blobImg from '../../img/blob-cover.png';

const MenuSidebar = () => {
  return (
    <aside className="menu__sidebar">
      <ul>
        <li>
          <a href="#">
            <img src={blobImg} alt="" />
            <span>blob</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={blobImg} alt="" />
            <span>blob</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={blobImg} alt="" />
            <span>blob</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src={blobImg} alt="" />
            <span>blob</span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default MenuSidebar;
