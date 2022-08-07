import "./rangeInput.css";

const RangeInput = ({ min, max, range, value, setValue, title }) => {
  return (
    <div className="py-5 px-4 border-b-2 border-blue-100/60">
      <div className="flex justify-between mb-2">
        <p className="block">{title}</p>
        <p>{`${value} px`}</p>
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
