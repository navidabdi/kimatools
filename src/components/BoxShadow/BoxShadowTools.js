import { RangeInput } from "../Controlers";
import {
  minWidthAtom,
  maxWidthAtom,
  rangeWidthAtom,
  valueWidthAtom,
} from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";

const BoxShadowTools = () => {
  const [minWidth] = useRecoilState(minWidthAtom);
  const [maxWidth] = useRecoilState(maxWidthAtom);
  const [rangeWidth] = useRecoilState(rangeWidthAtom);
  const [valueWidth, setValueWidth] = useRecoilState(valueWidthAtom);

  return (
    <div className="px-5 py-5">
      <RangeInput
        min={minWidth}
        max={maxWidth}
        range={rangeWidth}
        value={valueWidth}
        setValue={setValueWidth}
        title="width"
      />
    </div>
  );
};

export default BoxShadowTools;
