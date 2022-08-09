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
  shadowColorAtom,
} from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";
import ExportPopup from "../ExportPopup";

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
  const [shadowColor] = useRecoilState(shadowColorAtom);

  const dataExport = {
    title: "Generated Box Shadow",
    des: "This is the CSS needed to generate the box shadows you see in the app.",
    data: `box-shadow: ${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor};`,
  };

  return (
    <>
      <div
        className="bg-gray-100 min-h-full flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: colorMain }}
      >
        <div
          className=" h-[450px] bg-white rounded-[50px]"
          style={{
            width: valueWidth + "px",
            height: valueHeight + "px",
            borderRadius: borderRadius + "px",
            backgroundColor: colorBox,
            boxShadow: `${horizontalOffset}px ${verticalOffset}px ${blurRadius}px ${spreadRadius}px ${shadowColor}`,
          }}
        ></div>
      </div>
      <ExportPopup
        title={dataExport.title}
        description={dataExport.des}
        data={dataExport.data}
      />
    </>
  );
};

export default BoxShadow;
