const SlideInputRadio = () => {
  return (
    <div className="tabs bg-third flex relative p-1 rounded-xl">
      <input
        type="radio"
        id="radio-1"
        name="tabs"
        className="peer hidden"
        defaultChecked
      />
      <label
        className="cursor-pointer text-primary transition text-xl font-semibold peer-checked:text-secondery z-10 flex items-center justify-center w-[90px] h-[50px]"
        htmlFor="radio-1"
      >
        one
      </label>

      <span className="glider bg-primary z-0 rounded-xl absolute w-[90px] h-[50px] flex transition"></span>
    </div>
  );
};

export default SlideInputRadio;
