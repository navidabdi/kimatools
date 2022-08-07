import { RangeInput } from "../Controlers";
import {
  valueWidthAtom,
  valueHeightAtom,
  borderRadiustAtom,
} from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";

const BoxShadowTools = () => {
  const [valueWidth, setValueWidth] = useRecoilState(valueWidthAtom);
  const [valueHeigh, setValueHeigh] = useRecoilState(valueHeightAtom);
  const [borderRadius, setBorderRadius] = useRecoilState(borderRadiustAtom);

  return (
    <div className="">
      <RangeInput
        title="width"
        min={100}
        max={450}
        range={1}
        value={valueWidth}
        setValue={setValueWidth}
      />
      <RangeInput
        title="height"
        min={100}
        max={450}
        range={1}
        value={valueHeigh}
        setValue={setValueHeigh}
      />
      <RangeInput
        title="Border Radius"
        min={0}
        max={225}
        range={1}
        value={borderRadius}
        setValue={setBorderRadius}
      />
    </div>
  );
};

export default BoxShadowTools;
