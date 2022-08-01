import blobImg from '../../img/blob-cover.png';

const MenuSidebar = () => {
  return (
    <aside className="col-span-1 bg-blue-50">
      <ul className="flex flex-col items-center justify-center">
        <li className="text-center relative px-4 py-3 duration-100 ease-in hover:bg-blue-200">
          <a href="#">
            <img src={blobImg} alt="" className="rounded-md" />
            <span className="font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              blob
            </span>
          </a>
        </li>
        <li className="text-center relative px-4 py-3 duration-100 ease-in hover:bg-blue-200">
          <a href="#">
            <img src={blobImg} alt="" className="rounded-md" />
            <span className="font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              blob
            </span>
          </a>
        </li>
        <li className="text-center relative px-4 py-3 duration-100 ease-in hover:bg-blue-200">
          <a href="#">
            <img src={blobImg} alt="" className="rounded-md" />
            <span className="font-bold absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              blob
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default MenuSidebar;
