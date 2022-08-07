import { valueWidthAtom } from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";
const BoxShadow = () => {
  const [valueWidth] = useRecoilState(valueWidthAtom);

  return (
    <div className="bg-gray-100 min-h-full flex items-center justify-center">
      <div
        className=" h-[450px] bg-white rounded-[50px]"
        style={{ width: valueWidth + "px" }}
      ></div>
    </div>
  );
};

export default BoxShadow;
