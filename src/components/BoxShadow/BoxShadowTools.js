import { RangeInput } from "../Controlers";
import { valueWidthAtom, valueHeightAtom } from "../../atoms/BoxShadowAtom";
import { useRecoilState } from "recoil";

const BoxShadowTools = () => {
  const [valueWidth, setValueWidth] = useRecoilState(valueWidthAtom);
  const [valueHeigh, setValueHeigh] = useRecoilState(valueHeightAtom);

  return (
    <div className="px-5 py-5">
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
    </div>
  );
};

export default BoxShadowTools;
