import "./rangeInput.css";

const RangeInput = ({ min, max, range, value, setValue, title }) => {
  return (
    <div>
      <label htmlFor="default-range" className="block">
        {title}
      </label>
      <input
        min={min}
        max={max}
        range={range}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="range"
        className="w-full"
      />
    </div>
  );
};

export default RangeInput;
