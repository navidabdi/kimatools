import "./rangeInput.css";

const RangeInput = ({ min, max, range, value, setValue, title }) => {
  return (
    <div className="py-3 first:pt-0">
      <div className="flex justify-between mb-2">
        <p className="block text-sm">{title}</p>
        <p className="text-sm">{`${value} px`}</p>
      </div>
      <input
        min={min}
        max={max}
        range={range}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="range"
        className="input-range w-full"
      />
    </div>
  );
};

export default RangeInput;
