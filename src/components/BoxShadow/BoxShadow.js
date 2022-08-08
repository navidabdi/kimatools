import {
  valueWidthAtom,
  valueHeightAtom,
  borderRadiustAtom,
  horizontalOffsetAtom,
  verticalOffsetAtom,
  blurRadiusAtom,
  spreadRadiusAtom,
  itemBgShadowAtom,
  mainBgShadowAtom,
} from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";

const BoxShadow = () => {
  const [valueWidth] = useRecoilState(valueWidthAtom);
  const [valueHeight] = useRecoilState(valueHeightAtom);
  const [borderRadius] = useRecoilState(borderRadiustAtom);
  const [horizontalOffset] = useRecoilState(horizontalOffsetAtom);
  const [verticalOffset] = useRecoilState(verticalOffsetAtom);
  const [blurRadius] = useRecoilState(blurRadiusAtom);
  const [spreadRadius] = useRecoilState(spreadRadiusAtom);
  const [colorBox] = useRecoilState(itemBgShadowAtom);
  const [colorMain] = useRecoilState(mainBgShadowAtom);

  return (
    <div
      className="bg-gray-100 min-h-full flex items-center justify-center"
      style={{ backgroundColor: colorMain }}
    >
      <div
        className=" h-[450px] bg-white rounded-[50px]"
        style={{
          width: valueWidth + "px",
          height: valueHeight + "px",
          borderRadius: borderRadius + "px",
          backgroundColor: colorBox,
          boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(0,0,0,0.1)`,
        }}
      ></div>
    </div>
  );
};

export default BoxShadow;
