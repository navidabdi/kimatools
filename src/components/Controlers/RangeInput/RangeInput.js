import "./rangeInput.css";

const RangeInput = ({ min, max, range, setMin, setMax, setRange, title }) => {
  return (
    <div>
      <label htmlFor="default-range" className="block">
        {title}
      </label>
      <input id="default-range" type="range" className="w-full" />
    </div>
  );
};

export default RangeInput;
