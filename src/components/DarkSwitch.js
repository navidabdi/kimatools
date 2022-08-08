import { SunIcon } from "@heroicons/react/outline";

const DarkSwitch = () => {
  return (
    <div className="cursor-pointer bg-indigo-50 rounded-full flex h-10 w-10 justify-center items-center">
      <SunIcon className="w-7 h-7" />
    </div>
  );
};

export default DarkSwitch;
