import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header className="col-start-1 col-end-11 px-6 bg-blue-100/75 h-[8vh]">
      <div className="flex justify-between items-center h-full">
        <h1 className="font-bold text-lg leading-[0]">WEBKIMA TOOLS</h1>
        <a
          href="https://webkima.com/"
          target="_blank"
          className="block cursor-pointer"
        >
          <img className="w-[130px]" src={logo} alt="webkima academy logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
