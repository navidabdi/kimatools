import { MinusIcon, PlusIcon } from "@heroicons/react/outline";
const RangeInput = ({ min, max, range, value, setValue, title }) => {
  return (
    <div key={title} className="py-4 first:pt-0">
      <div className="flex justify-between mb-2">
        <p className="block text-sm dark-text-primary">{title}</p>
        <p className="text-sm dark-text-primary">{`${value} px`}</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={() => {
            if (value > min) setValue(+value - range);
          }}
          className={`${
            value == min
              ? "bg-indigo-200 dark-bg-third"
              : "bg-indigo-500 dark-bg-secendery"
          } text-2xl  h-7 text-white w-10 items-center justify-center flex rounded-full`}
        >
          <MinusIcon className="w-4 h-4" />
        </button>
        <input
          min={min}
          max={max}
          range={range}
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="range"
          className="input-range w-full mx-2"
        />
        <button
          onClick={() => {
            if (value < max) setValue(+value + range);
          }}
          className={`${
            value == max
              ? "bg-indigo-200 dark-bg-third"
              : "bg-indigo-500 dark-bg-secendery"
          } text-2xl  h-7 text-white w-10 items-center justify-center flex rounded-full`}
        >
          <PlusIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default RangeInput;
